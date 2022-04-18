import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tabs' },
  {
    loadChildren: () =>
      import('../feature/tabs/tabs.module').then((m) => m.TabsModule),
    path: 'tabs',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
})
export class AppRoutingModule {}
