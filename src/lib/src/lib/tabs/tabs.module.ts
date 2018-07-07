import { NgModule } from '@angular/core';

import { TabComponent } from './tab';
import { TabsModule as TabsComponentModule } from './tabs';

@NgModule({
  exports: [
    TabComponent,
    TabsComponentModule,
  ],
})
export class TabsModule {}
