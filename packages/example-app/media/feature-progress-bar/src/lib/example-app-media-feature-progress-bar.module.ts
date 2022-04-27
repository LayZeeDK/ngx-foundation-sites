import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  ProgressBarShellComponent,
  ProgressBarShellScam,
} from './shell.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProgressBarShellComponent },
    ]),
    ProgressBarShellScam,
  ],
})
export class ExampleAppMediaFeatureProgressBarModule {}
