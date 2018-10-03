import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'tabs-panel',
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
}
