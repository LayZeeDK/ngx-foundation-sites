import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FasTabsModule } from 'ngx-foundation-sites';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ex-tabs-basics',
  styles: [``],
  template: `
    <h2>Basics</h2>

    <p>
      There are two pieces to a tabbed interface: the tabs themselves, and the
      content for each tab. The tabs are an element with a title. Each tab
      contains a link to a tab. The unique ID of each tab will will match the
      href of a tabstrip.
    </p>

    <p>Put it all together, and we get this:</p>

    <fas-tabs data-testid="basics-full-example">
      <fas-tab id="panel1" title="Tab 1" [isActive]="true">
        <p>one</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
        <p>
          <a routerLink="./" fragment="">I am a link but don't do anything</a>
        </p>
      </fas-tab>

      <fas-tab id="panel2" title="Tab 2">
        <p>two</p>
        <textarea></textarea>
        <button class="button">I do nothing!</button>
      </fas-tab>

      <fas-tab id="panel3" title="Tab 3">
        <p>three</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel3" title="Tab 4">
        <p>four</p>
        <img class="thumbnail" src="/assets/img/generic/rectangle-2.jpg" />
      </fas-tab>

      <fas-tab id="panel3" title="Tab 5">
        <p>five</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel3" title="Tab 6">
        <p>six</p>
        <img class="thumbnail" src="/assets/img/generic/rectangle-8.jpg" />
      </fas-tab>
    </fas-tabs>
  `,
})
export class TabsBasicsComponent {}

@NgModule({
  declarations: [TabsBasicsComponent],
  exports: [TabsBasicsComponent],
  imports: [RouterModule, FasTabsModule],
})
export class TabsBasicsScam {}
