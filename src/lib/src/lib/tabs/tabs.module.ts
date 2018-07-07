import { NgModule } from '@angular/core';

import { TabModule } from './tab';
import { TabsModule as TabsComponentModule } from './tabs';

@NgModule({
  exports: [
    TabModule,
    TabsComponentModule,
  ],
})
export class TabsModule {}
