import { NgModule } from '@angular/core';

import { FasCardDividerScam } from './card-divider.component';
import { FasCardSectionScam } from './card-section.component';
import { FasCardScam } from './card.component';

@NgModule({
  exports: [FasCardDividerScam, FasCardSectionScam, FasCardScam],
})
export class FasCardModule {}
