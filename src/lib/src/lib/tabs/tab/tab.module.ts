import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FasTabComponent } from './tab.component';

@NgModule({
  declarations: [FasTabComponent],
  exports: [FasTabComponent],
  imports: [
    RouterModule,
  ],
})
export class TabModule {}
