import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TrackByFunction,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  concatWith,
  from,
  map,
  mergeMap,
  Observable,
  Subscription,
} from 'rxjs';

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
    <ul class="fas-tabs__tabs" [class.vertical]="vertical">
      <li
        *ngFor="let tab of tabs; trackBy: trackById"
        class="fas-tabs__tabs-title"
        [class.is-active]="tab.active"
        role="presentation"
      >
        <a
          id="{{ tab.id }}-label"
          routerLink="./"
          [fragment]="tab.id"
          [attr.aria-controls]="tab.id"
          [attr.aria-selected]="tab.active"
          role="tab"
          (click)="selectTab(tab)"
          >{{ tab.title }}</a
        >
      </li>
    </ul>

    <div class="fas-tabs__tabs-content" [class.vertical]="vertical">
      <ng-content select="fas-tab"></ng-content>
    </div>
  `,
})
export class FasTabsComponent {
  #collapsingDefault = false;
  #collapsing = this.#collapsingDefault;
  #untilDestroy = new Subscription();
  #verticalDefault = false;
  #vertical = this.#verticalDefault;

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
  protected ngAfterContentInit(): void {
    this.#initializeTabActiveChange();
  }

  // Use protected lifecycle hooks to minimize the public API surface
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  protected ngOnDestroy(): void {
    this.#untilDestroy.unsubscribe();
  }

  protected selectTab(selectedTab: FasTabComponent): void {
    const activeTab = this.tabs.find(t => t.active);

    if (this.collapsing && activeTab === selectedTab) {
      this.tabs.forEach(tab => (tab.active = false));
    } else {
      this.tabs.forEach(tab => (tab.active = tab === selectedTab));
    }
  }

  protected trackById: TrackByFunction<FasTabComponent> = (_, tab) => tab.id;

  #initializeTabActiveChange(): void {
    const tabActiveChange = from(this.tabs.toArray()).pipe(
      concatWith(this.tabs.changes as Observable<FasTabComponent>),
      mergeMap(tab => tab.activeChange.pipe(map(() => tab)))
    );

    this.#untilDestroy.add(
      tabActiveChange.subscribe(tab => this.tabActiveChange.emit(tab))
    );
  }
}
