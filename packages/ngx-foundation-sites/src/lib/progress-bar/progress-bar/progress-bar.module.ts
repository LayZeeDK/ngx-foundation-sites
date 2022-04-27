import { NgModule } from '@angular/core';

import { FasProgressBarScam } from './progress-bar.component';
import { FasProgressMeterTextScam } from './progress-meter-text.component';
import { FasProgressMeterScam } from './progress-meter.component';

@NgModule({
  exports: [FasProgressBarScam, FasProgressMeterScam, FasProgressMeterTextScam],
})
export class FasProgressBarModule {}
