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
      fas-tabs {
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
          (click)="onActivate(tab)"
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
  vertical = false;

  @ContentChildren(FasTabComponent)
  tabs!: QueryList<FasTabComponent>;

  onActivate(tab: FasTabComponent): void {
    this.tabs.forEach(t => (t.isActive = t === tab));
  }
}

@NgModule({
  declarations: [FasTabsComponent],
  exports: [FasTabsComponent],
  imports: [CommonModule, RouterModule],
})
export class FasTabsScam {}
