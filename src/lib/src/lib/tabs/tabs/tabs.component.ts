import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { FasTabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display: block;' },
  selector: 'fas-tabs',
  templateUrl: './tabs.component.html',
})
export class FasTabsComponent {
  @ContentChildren(FasTabPanelComponent)
  public panels!: QueryList<FasTabPanelComponent>;

  public activate(panel: FasTabPanelComponent): void {
    this.panels.forEach(p => p.isActive = p === panel);
  }
}
