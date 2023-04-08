import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

let serialNumber = 1;

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tab',
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasTabComponent {
  #id = '';
  #isActive = false;

  @Input()
  @HostBinding('class.is-active')
  get active(): boolean {
    return this.#isActive;
  }
  set active(value: boolean) {
    if (value === this.#isActive) {
      return;
    }

    this.#isActive = value;
    this.activeChange.emit(value);
  }
  @Input()
  title = '';
  @Output()
  activeChange = new EventEmitter<boolean>();

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): 'true' | null {
    return this.active ? null : 'true';
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
