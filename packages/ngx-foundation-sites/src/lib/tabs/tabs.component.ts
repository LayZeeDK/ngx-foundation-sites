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
import { Observable, take } from 'rxjs';

import { FasTabComponent } from './tab.component';
import { TabsPresenter } from './tabs.presenter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [TabsPresenter],
  selector: 'fas-tabs',
  styleUrls: ['../_global-settings.scss', './tabs.component.scss'],
  template: `
    <ul class="tabs" [class.vertical]="vertical$ | async">
      <li
        *ngFor="let tab of tabs"
        class="tabs-title"
        [class.is-active]="tab.active$ | async"
        role="presentation"
      >
        <a
          id="{{ tab.id$ | async }}-label"
          routerLink="./"
          [fragment]="(tab.id$ | async) ?? ''"
          [attr.aria-controls]="tab.id$ | async"
          [attr.aria-selected]="tab.active$ | async"
          role="tab"
          (click)="selectTab(tab)"
          >{{ tab.title }}</a
        >
      </li>
    </ul>

    <div class="tabs-content" [class.vertical]="vertical$ | async">
      <ng-content select="fas-tab"></ng-content>
    </div>
  `,
})
export class FasTabsComponent {
  #presenter: TabsPresenter;

  vertical$: Observable<boolean>;

  @Input()
  set collapsing(collapsing: boolean) {
    this.#presenter.updateCollapsing(collapsing);
  }
  @Input()
  set vertical(vertical: boolean) {
    this.#presenter.updateVertical(vertical);
  }

  @ContentChildren(FasTabComponent)
  tabs!: QueryList<FasTabComponent>;

  constructor(presenter: TabsPresenter) {
    this.#presenter = presenter;
    ({ vertical$: this.vertical$ } = presenter);
  }

  selectTab(selectedTab: FasTabComponent): void {
    this.#presenter.selectTabById(selectedTab.id$.pipe(take(1)));
  }
}

@NgModule({
  declarations: [FasTabsComponent],
  exports: [FasTabsComponent],
  imports: [CommonModule, RouterModule],
})
export class FasTabsScam {}
