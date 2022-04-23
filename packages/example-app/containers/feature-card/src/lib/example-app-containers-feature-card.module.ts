import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardShellComponent, CardShellScam } from './shell.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CardShellComponent },
    ]),
    CardShellScam,
  ],
})
export class ExampleAppContainersFeatureCardModule {}
