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
    class: 'tabs-title',
    role: 'presentation',
  },
  // tslint:disable-next-line: component-selector
  selector: '[fasTab]',
  templateUrl: './tab.component.html',
})
export class FasTabComponent {
  @Input('fasTabIsActive')
  @HostBinding('class.is-active')
  isActive: boolean = false;
  @Input('fasTabPanelId')
  panelId: string = '';
  @Input('fasTabTitle')
  title: string = '';
  @Output('fasTabActivate')
  activate = new EventEmitter<void>();
}
