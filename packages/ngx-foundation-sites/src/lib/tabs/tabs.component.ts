import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  NgModule,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { FasTabComponent } from './tab.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tabs',
  styleUrls: ['../_global-settings.scss', './tabs.component.scss'],
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

  @ContentChildren(FasTabComponent)
  tabs!: QueryList<FasTabComponent>;

  selectTab(selectedTab: FasTabComponent): void {
    const activeTab = this.tabs.find(t => t.active);

    if (this.collapsing && activeTab === selectedTab) {
      this.tabs.forEach(tab => (tab.active = false));
    } else {
      this.tabs.forEach(tab => (tab.active = tab === selectedTab));
    }
  }
}

@NgModule({
  declarations: [FasTabsComponent],
  exports: [FasTabsComponent],
  imports: [CommonModule, RouterModule],
})
export class FasTabsScam {}
