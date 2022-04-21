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
  styles: [
    `
      @import '~foundation-sites/scss/global';
      @import '~foundation-sites/scss/components/tabs';

      fas-tabs {
        @include foundation-tabs;

        display: block;
      }
    `,
  ],
  template: `
    <ul class="tabs" [class.vertical]="vertical">
      <li
        *ngFor="let tab of tabs"
        class="tabs-title"
        [class.is-active]="tab.isActive"
        role="presentation"
      >
        <a
          id="{{ tab.id }}-label"
          routerLink="./"
          [fragment]="tab.id"
          [attr.aria-controls]="tab.id"
          [attr.aria-selected]="tab.isActive"
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
    const activeTab = this.tabs.find(t => t.isActive);

    if (this.collapsing && activeTab === selectedTab) {
      this.tabs.forEach(tab => (tab.isActive = false));
    } else {
      this.tabs.forEach(tab => (tab.isActive = tab === selectedTab));
    }
  }
}

@NgModule({
  declarations: [FasTabsComponent],
  exports: [FasTabsComponent],
  imports: [CommonModule, RouterModule],
})
export class FasTabsScam {}
