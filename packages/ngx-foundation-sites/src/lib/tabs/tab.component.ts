import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
} from '@angular/core';

let serialNumber = 1;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tab',
  styles: [
    `
      fas-tab {
        display: block;
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class FasTabComponent {
  #id = '';
  #isActive = false;

  @Input()
  @HostBinding('class.is-active')
  get isActive(): boolean {
    return this.#isActive;
  }
  set isActive(value: boolean) {
    this.#isActive = value;
    this.isActiveChange.emit(value);
  }
  @Input()
  title = '';
  @Output()
  isActiveChange = new EventEmitter<boolean>();

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): 'true' | null {
    return this.isActive ? null : 'true';
  }
  @HostBinding('attr.aria-labelledby')
  get ariaLabelledBy(): string {
    return `${this.id}-label`;
  }
  @HostBinding('className')
  get className(): string {
    return 'tabs-panel';
  }
  @HostBinding('id')
  get id(): string {
    return this.#id;
  }
  @HostBinding('attr.role')
  get role(): string {
    return 'tabpanel';
  }

  constructor(@Attribute('id') idAttribute: string | null) {
    if (!idAttribute) {
      idAttribute = `fas-tab-${serialNumber}`;
      serialNumber += 1;
    }

    this.#id = idAttribute;
  }
}

@NgModule({
  declarations: [FasTabComponent],
  exports: [FasTabComponent],
})
export class FasTabScam {}
