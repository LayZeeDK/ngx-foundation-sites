import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';

import { TabPresenter, tabPresenterProviders } from './tab.presenter';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tab',
  template: `<ng-content></ng-content>`,
  viewProviders: [tabPresenterProviders],
})
export class FasTabComponent {
  @Input()
  title = '';

  @HostBinding('class.tabs-panel')
  get componentClassEnabled(): boolean {
    return true;
  }
  @HostBinding('attr.role')
  get role(): string {
    return 'tabpanel';
  }

  active$: Observable<boolean>;
  id$: Observable<string>;

  constructor(
    @Attribute('id') idAttribute: string | null,
    @Attribute('active') activeAttribute: BooleanInput | null,
    presenter: TabPresenter
  ) {
    ({ active$: this.active$, id$: this.id$ } = presenter);
    activeAttribute = coerceBooleanProperty(activeAttribute);
    idAttribute ??= null;

    presenter.initialize({ active: activeAttribute, id: idAttribute });
  }
}

@NgModule({
  declarations: [FasTabComponent],
  exports: [FasTabComponent],
})
export class FasTabScam {}
