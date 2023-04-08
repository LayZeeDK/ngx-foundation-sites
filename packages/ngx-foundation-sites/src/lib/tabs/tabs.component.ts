import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';

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
export class FasTabsComponent {
  @Input()
  collapsing = false;
  @Input()
  vertical = false;

  @ContentChildren(FasTabToken)
  tabs!: QueryList<FasTabToken>;

  selectTab(selectedTab: FasTabToken): void {
    const activeTab = this.tabs.find(t => t.active);

    if (this.collapsing && activeTab === selectedTab) {
      this.tabs.forEach(tab => (tab.active = false));
    } else {
      this.tabs.forEach(tab => (tab.active = tab === selectedTab));
    }
  }
}
