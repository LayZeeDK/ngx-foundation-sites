import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tab',
  templateUrl: './tab.component.html',
})
export class FoundationTabComponent {
  @Input()
  public isActive: boolean = false;
  @Input()
  public title: string = '';
}
