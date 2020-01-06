import { NgModule } from '@angular/core';

import { TabModule } from './tab/tab.module';
import { TabsModule as TabsModule } from './tabs/tabs.module';

@NgModule({
  exports: [
    TabModule,
    TabsModule,
  ],
})
export class FasTabsModule { }
