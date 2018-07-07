import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FoundationTabsComponent } from './tabs.component';

@NgModule({
  declarations: [FoundationTabsComponent],
  exports: [FoundationTabsComponent],
  imports: [
    CommonModule,
  ],
})
export class FoundationTabsModule {}
