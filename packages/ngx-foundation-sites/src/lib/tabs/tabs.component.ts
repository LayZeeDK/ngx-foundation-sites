import { NgFor } from '@angular/common';
import type { AfterViewInit, OnDestroy, TrackByFunction } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Observable } from 'rxjs';
import { concatWith, from, map, mergeMap, Subscription } from 'rxjs';

import { FasTabComponent } from './tab.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tabs',
  exportAs: 'fasTabs',
  styleUrls: ['../_global-settings.scss', './tabs.component.scss'],
  imports: [NgFor, RouterLink],
  template: `
    <ul class="fas-tabs__tabs" [class.vertical]="vertical" role="tablist">
      <li
        *ngFor="let tab of tabs; trackBy: trackById; let i = index"
        class="fas-tabs__tabs-title"
        [class.is-active]="tab.active"
        role="presentation"
      >
        <a
          [id]="tab.id + '-label'"
          routerLink="./"
          [fragment]="tab.id"
          [attr.aria-controls]="tab.id"
          [attr.aria-selected]="tab.active"
          [attr.tabindex]="tab.active ? 0 : -1"
          role="tab"
          (click)="selectTab(tab)"
          (keydown)="onTabKeydown($event, i)"
          >{{ tab.title }}</a
        >
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
  #activeTabIndex = 0;

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

  // Use protected lifecycle hooks to minimize the public API surface
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit(): void {
    this.#initializeTabActiveChange();
    this.#updateActiveTabIndex();
  }

  // Use protected lifecycle hooks to minimize the public API surface
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {
    this.#untilDestroy.unsubscribe();
  }

  onTabKeydown(event: KeyboardEvent, currentIndex: number): void {
    let newIndex = currentIndex;
    const tabCount = this.tabs.length;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        newIndex = (currentIndex + 1) % tabCount;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        newIndex = (currentIndex - 1 + tabCount) % tabCount;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        // Tab is already handled by click
        return;
      default:
        return;
    }

    const newTab = this.tabs.toArray()[newIndex];
    if (newTab) {
      this.selectTab(newTab);
      // Focus the new tab
      setTimeout(() => {
        const tabElement = document.getElementById(`${newTab.id}-label`);
        if (tabElement) {
          tabElement.focus();
        }
      });
    }
  }

  protected selectTab(selectedTab: FasTabComponent): void {
    const activeTab = this.tabs.find(tab => tab.active);

    if (this.collapsing && activeTab === selectedTab) {
      this.tabs.forEach(tab => (tab.active = false));
    } else {
      this.tabs.forEach(tab => (tab.active = tab === selectedTab));
    }

    this.#updateActiveTabIndex();
  }

  protected trackById: TrackByFunction<FasTabComponent> = (_, tab) => tab.id;

  #updateActiveTabIndex(): void {
    this.#activeTabIndex = this.tabs.toArray().findIndex(tab => tab.active);
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
