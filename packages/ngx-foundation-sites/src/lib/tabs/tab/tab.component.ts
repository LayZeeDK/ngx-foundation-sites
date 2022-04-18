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

let serialNumber: number = 1;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'tabs-panel',
    role: 'tabpanel',
  },
  selector: 'fas-tab',
  templateUrl: './tab.component.html',
})
export class FasTabComponent {
  private _isActive: boolean = false;

  @Input()
  @HostBinding('class.is-active')
  public get isActive(): boolean {
    return this._isActive;
  }
  public set isActive(value: boolean) {
    this._isActive = value;
    this.isActiveChange.emit(value);
  }
  @Input()
  public title: string = '';
  @Output()
  public readonly isActiveChange: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('attr.aria-hidden')
  public get ariaHidden(): 'true' | null {
    return this.isActive ? null : 'true';
  }
  @HostBinding('attr.aria-labelledby')
  public get ariaLabelledBy(): string {
    return `${this.id}-label`;
  }
  @HostBinding('id')
  public readonly id: string;

  public constructor(@Attribute('id') idAttribute: string | null) {
    if (!idAttribute) {
      idAttribute = `fas-tab-${serialNumber}`;
      serialNumber += 1;
    }

    this.id = idAttribute;
  }
}
