import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { FasTabComponent } from '../tab/tab.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'fas-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class FasTabsComponent {
  @ContentChildren(FasTabComponent)
  public tabs!: QueryList<FasTabComponent>;

  public activate(tab: FasTabComponent): void {
    this.tabs.forEach(t => (t.isActive = t === tab));
  }
}
