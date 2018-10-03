import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FasTabsModule } from 'ngx-foundation-sites';

import { CommonModule } from '../../../../../node_modules/@angular/common';
import { BasicsComponent } from './basics';
import { TabsPageComponent } from './tabs-page';
import { tabsRoutes } from './tabs.routes';

@NgModule({
  declarations: [
    TabsPageComponent,
    BasicsComponent,
  ],
  imports: [
    RouterModule.forChild(tabsRoutes),
    CommonModule,
    FasTabsModule,
  ],
})
export class TabsModule {}
