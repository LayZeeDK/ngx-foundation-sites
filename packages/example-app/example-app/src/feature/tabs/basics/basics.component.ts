import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-tabs-basics',
  styleUrls: ['./basics.component.scss'],
  templateUrl: './basics.component.html',
})
export class BasicsComponent {}
