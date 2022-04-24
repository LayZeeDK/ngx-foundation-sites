import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'media/progress-bar' },
  {
    path: 'containers',
    children: [
      {
        loadChildren: () =>
          import('@example-app/containers/feature-card').then(
            esModule => esModule.ExampleAppContainersFeatureCardModule
          ),
        path: 'card',
      },
      {
        loadChildren: () =>
          import('@example-app/containers/feature-tabs').then(
            esModule => esModule.ExampleAppContainersFeatureTabsModule
          ),
        path: 'tabs',
      },
    ],
  },
  {
    path: 'media',
    children: [
      {
        loadChildren: () =>
          import('@example-app/media/feature-progress-bar').then(
            esModule => esModule.ExampleAppMediaFeatureProgressBarModule
          ),
        path: 'progress-bar',
      },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
})
export class AppRoutingModule {}
