import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  inject,
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
  exportAs: 'fasTab',
  styleUrls: ['./tab.component.scss'],
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class FasTabComponent {
  #element: ElementRef<HTMLElement> = inject(ElementRef);
  #id = '';
  #isActiveDefault = false;
  #isActive = this.#isActiveDefault;
  #titleDefault = '';
  #title = this.#titleDefault;

  @Input()
  @HostBinding('class.is-active')
  get active(): boolean {
    return this.#isActive;
  }
  set active(value: boolean | null) {
    value ??= this.#isActiveDefault;

    if (value === this.#isActive) {
      return;
    }

    this.#isActive = value;
    this.activeChange.emit(value);
  }
  @Input()
  get title(): string {
    return this.#title;
  }
  set title(title: string | null) {
    this.#title = title ?? this.#titleDefault;
  }
  @Output()
  readonly activeChange = new EventEmitter<boolean>();

  @HostBinding('attr.aria-hidden')
  protected get ariaHidden(): 'true' | null {
    return this.active ? null : 'true';
  }
  @HostBinding('attr.aria-labelledby')
  protected get ariaLabelledBy(): string {
    return `${this.id}-label`;
  }
  @HostBinding('id')
  get id(): string {
    return this.#id;
  }
  @HostBinding('attr.role')
  protected get role(): string {
    return 'tabpanel';
  }

  protected constructor() {
    let idAttribute = this.#element.nativeElement.getAttribute('id');

    if (idAttribute == null || idAttribute === '') {
      idAttribute = `fas-tab-${serialNumber}`;
      serialNumber += 1;
    }

    this.#id = idAttribute;
  }
}
