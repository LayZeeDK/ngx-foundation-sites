import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FasTabsComponent } from './tabs.component';

@NgModule({
  declarations: [FasTabsComponent],
  exports: [FasTabsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class TabsModule {}
