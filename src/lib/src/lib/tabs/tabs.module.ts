import { NgModule } from '@angular/core';

import { TabModule } from './tab';
import { TabsModule } from './tabs';

@NgModule({
  exports: [TabModule, TabsModule],
})
export class FasTabsModule {}
