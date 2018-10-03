import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FasTabsComponent } from './tabs.component';

@NgModule({
  declarations: [FasTabsComponent],
  exports: [FasTabsComponent],
  imports: [
    CommonModule,
  ],
})
export class TabsModule {}
