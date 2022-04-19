import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsShellComponent, TabsShellScam } from './shell.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: TabsShellComponent },
    ]),
    TabsShellScam,
  ],
})
export class ExampleAppContainersFeatureTabsModule {}
