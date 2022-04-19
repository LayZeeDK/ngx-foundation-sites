import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, NgModule, QueryList, ViewEncapsulation } from '@angular/core';
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
    <ul class="tabs">
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

    <div class="tabs-content">
      <ng-content select="fas-tab"></ng-content>
    </div>
  `,
})
export class FasTabsComponent {
  @ContentChildren(FasTabComponent)
  public tabs!: QueryList<FasTabComponent>;

  public onActivate(tab: FasTabComponent): void {
    this.tabs.forEach(t => (t.isActive = t === tab));
  }
}

@NgModule({
  declarations: [FasTabsComponent],
  exports: [FasTabsComponent],
  imports: [CommonModule, RouterModule],
})
export class FasTabsScam {}
