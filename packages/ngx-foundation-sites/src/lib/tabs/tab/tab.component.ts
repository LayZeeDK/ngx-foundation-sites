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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tab',
  styleUrls: ['./tab.component.scss'],
  templateUrl: './tab.component.html',
})
export class FasTabComponent {
  private _isActive = false;

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
  public title = '';
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
  @HostBinding('className')
  public get className(): string {
    return 'tabs-panel';
  }
  @HostBinding('id')
  public readonly id: string;
  @HostBinding('attr.role')
  public get role(): string {
    return 'tabpanel';
  }

  public constructor(@Attribute('id') idAttribute: string | null) {
    if (!idAttribute) {
      idAttribute = `fas-tab-${serialNumber}`;
      serialNumber += 1;
    }

    this.id = idAttribute;
  }
}
