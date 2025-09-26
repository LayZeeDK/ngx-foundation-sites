import { FocusKeyManager } from '@angular/cdk/a11y';
import { NgFor } from '@angular/common';
import type { AfterViewInit, OnDestroy, TrackByFunction } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Observable } from 'rxjs';
import { concatWith, from, map, mergeMap, Subscription } from 'rxjs';

import { FasTabComponent } from './tab.component';
import { FasTabItemComponent } from './tab-item.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tabs',
  exportAs: 'fasTabs',
  styleUrls: ['../_global-settings.scss', './tabs.component.scss'],
  imports: [NgFor, RouterLink, FasTabItemComponent],
  template: `
    <ul class="fas-tabs__tabs" [class.vertical]="vertical" role="tablist">
      <li
        *ngFor="let tab of tabs; trackBy: trackById"
        class="fas-tabs__tabs-title"
        [class.is-active]="tab.active"
        role="presentation"
      >
        <fas-tab-item
          [tab]="tab"
          (tabSelected)="selectTab($event)"
        ></fas-tab-item>
      </li>
    </ul>

    <div class="fas-tabs__tabs-content" [class.vertical]="vertical">
      <ng-content select="fas-tab"></ng-content>
    </div>
  `,
})
export class FasTabsComponent implements AfterViewInit, OnDestroy {
  #collapsingDefault = false;
  #collapsing = this.#collapsingDefault;
  #untilDestroy = new Subscription();
  #verticalDefault = false;
  #vertical = this.#verticalDefault;
  #keyManager!: FocusKeyManager<FasTabItemComponent>;

  @Input()
  get collapsing(): boolean {
    return this.#collapsing;
  }
  set collapsing(value: boolean | null) {
    this.#collapsing = value ?? this.#collapsingDefault;
  }
  @Input()
  get vertical(): boolean {
    return this.#vertical;
  }
  set vertical(value: boolean | null) {
    this.#vertical = value ?? this.#verticalDefault;
  }
  @Output()
  readonly tabActiveChange = new EventEmitter<FasTabComponent>();

  @ContentChildren(FasTabComponent)
  protected tabs!: QueryList<FasTabComponent>;

  @ViewChildren(FasTabItemComponent)
  private tabItems!: QueryList<FasTabItemComponent>;

  // Use protected lifecycle hooks to minimize the public API surface
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit(): void {
    this.#initializeTabActiveChange();
    this.#initializeKeyManager();
  }

  // Use protected lifecycle hooks to minimize the public API surface
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {
    this.#untilDestroy.unsubscribe();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.#keyManager) {
      if (
        event.key === 'ArrowRight' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp'
      ) {
        event.preventDefault();
        this.#keyManager.onKeydown(event);

        const activeItem = this.#keyManager.activeItem;
        if (activeItem) {
          this.selectTab(activeItem.tab);
        }
      }
    }
  }

  protected selectTab(selectedTab: FasTabComponent): void {
    const activeTab = this.tabs.find(tab => tab.active);

    if (this.collapsing && activeTab === selectedTab) {
      this.tabs.forEach(tab => (tab.active = false));
    } else {
      this.tabs.forEach(tab => (tab.active = tab === selectedTab));
    }
  }

  protected trackById: TrackByFunction<FasTabComponent> = (_, tab) => tab.id;

  #initializeKeyManager(): void {
    this.#keyManager = new FocusKeyManager(this.tabItems)
      .withHorizontalOrientation(this.vertical ? null : 'ltr')
      .withVerticalOrientation(this.vertical)
      .withWrap();

    // Set the initially active item
    const activeTabIndex = this.tabs.toArray().findIndex(tab => tab.active);
    if (activeTabIndex >= 0) {
      this.#keyManager.setActiveItem(activeTabIndex);
    }
  }

  #initializeTabActiveChange(): void {
    const tabActiveChange = from(this.tabs.toArray()).pipe(
      concatWith(this.tabs.changes as Observable<FasTabComponent>),
      mergeMap(tab => tab.activeChange.pipe(map(() => tab)))
    );

    this.#untilDestroy.add(
      tabActiveChange.subscribe(tab => {
        this.tabActiveChange.emit(tab);
      })
    );
  }
}
