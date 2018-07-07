import { NgModule } from '@angular/core';

import { FoundationTabModule } from './tab';
import { FoundationTabsModule as TabsComponentModule } from './tabs';

@NgModule({
  exports: [
    FoundationTabModule,
    TabsComponentModule,
  ],
})
export class FoundationTabsModule {}
