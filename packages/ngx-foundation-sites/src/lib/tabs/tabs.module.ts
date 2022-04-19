import { NgModule } from '@angular/core';

import { FasTabScam } from './tab.component';
import { FasTabsScam } from './tabs.component';

@NgModule({
  exports: [FasTabsScam, FasTabScam],
})
export class FasTabsModule {}
