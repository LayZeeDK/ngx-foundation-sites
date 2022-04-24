import { NgModule } from '@angular/core';

import { FasProgressBarTextScam } from './progress-bar-text.component';
import { FasProgressBarScam } from './progress-bar.component';

@NgModule({
  exports: [FasProgressBarScam, FasProgressBarTextScam],
})
export class FasProgressBarModule {}
