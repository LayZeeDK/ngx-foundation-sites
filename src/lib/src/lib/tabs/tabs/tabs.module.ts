import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabModule } from '../tab/tab.module';
import { FasTabsComponent } from './tabs.component';

@NgModule({
  declarations: [FasTabsComponent],
  exports: [FasTabsComponent],
  imports: [
    CommonModule,
    RouterModule,
    TabModule,
  ],
})
export class TabsModule {}
