import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsPageModule } from './tabs-page';
import { tabsRoutes } from './tabs.routes';

@NgModule({
  imports: [
    RouterModule.forChild(tabsRoutes),
    TabsPageModule,
  ],
})
export class TabsModule {}
