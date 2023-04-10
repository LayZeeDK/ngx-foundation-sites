import { NgFor } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
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

import type { FasTabComponent } from './tab.component';
import { FasTabToken } from './tab.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tabs',
  exportAs: 'fasTabs',
  styleUrls: ['../_global-settings.scss', './tabs.component.scss'],
  imports: [NgFor, RouterLink],
  template: `
    <ul class="tabs" [class.vertical]="vertical">
      <li
        *ngFor="let tab of tabs"
        class="tabs-title"
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

    <div class="tabs-content" [class.vertical]="vertical">
      <ng-content select="fas-tab"></ng-content>
    </div>
  `,
})
export class FasTabsComponent implements AfterContentInit, OnDestroy {
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
  tabActiveChange = new EventEmitter<FasTabComponent>();

  @ContentChildren(FasTabToken)
  tabs!: QueryList<FasTabToken>;

  ngAfterContentInit(): void {
    this.#initializeTabActiveChange();
  }

  ngOnDestroy(): void {
    this.#untilDestroy.unsubscribe();
  }

  selectTab(selectedTab: FasTabToken): void {
    const activeTab = this.tabs.find(t => t.active);

    if (this.collapsing && activeTab === selectedTab) {
      this.tabs.forEach(tab => (tab.active = false));
    } else {
      this.tabs.forEach(tab => (tab.active = tab === selectedTab));
    }
  }

  #initializeTabActiveChange(): void {
    const tabActiveChange = from(this.tabs.toArray()).pipe(
      concatWith(this.tabs.changes as Observable<FasTabToken>),
      mergeMap(tab => tab.activeChange.pipe(map(() => tab)))
    ) as Observable<FasTabComponent>;

    this.#untilDestroy.add(
      tabActiveChange.subscribe(tab => this.tabActiveChange.emit(tab))
    );
  }
}
