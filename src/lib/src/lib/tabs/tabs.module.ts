import { NgModule } from '@angular/core';

import { TabPanelModule } from './tab-panel/tab-panel.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  exports: [
    TabPanelModule,
    TabsModule,
  ],
})
export class FasTabsModule { }
