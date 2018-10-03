import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabsPageComponent } from './tabs-page.component';

@NgModule({
  declarations: [TabsPageComponent],
  exports: [TabsPageComponent],
  imports: [
    CommonModule,
  ],
})
export class TabsPageModule {}
