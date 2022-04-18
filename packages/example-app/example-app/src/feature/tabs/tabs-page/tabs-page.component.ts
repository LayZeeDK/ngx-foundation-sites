import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-tabs-page',
  styleUrls: ['./tabs-page.component.scss'],
  templateUrl: './tabs-page.component.html',
})
export class TabsPageComponent {}
