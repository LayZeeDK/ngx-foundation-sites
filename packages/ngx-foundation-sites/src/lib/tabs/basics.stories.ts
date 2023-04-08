import { provideLocationMocks } from '@angular/common/testing';
import { provideRouter } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { fasTabsDeclarables } from './tabs-declarables';

const meta: Meta = {
  title: 'Containers/Tabs',
  decorators: [
    moduleMetadata({
      imports: [fasTabsDeclarables],
      providers: [provideRouter([]), provideLocationMocks()],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Tabs are elements that help you organize and navigate multiple documents in a
single container. They can be used for switching between items in the container.

There are two pieces to a tabbed interface: the tabs themselves, and the content
for each tab. The tabs are an element with a title. Each tab contains a link to
a tab. The unique ID of each tab will will match the \`href\` of a tabstrip.

Put it all together, and we get this:`,
      },
    },
  },
};

export default meta;

export const Basics: Story = args => ({
  props: args,
  template: `
    <fas-tabs id="basic-tabs">
      <fas-tab id="panel1" title="Basic tab 1" [active]="true">
        <p>one</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
        <p>
          <a routerLink="./" fragment="">I am a link but don't do anything</a>
        </p>
      </fas-tab>

      <fas-tab id="panel2" title="Basic tab 2">
        <p>two</p>
        <textarea></textarea>
        <button class="button">I do nothing!</button>
      </fas-tab>

      <fas-tab id="panel3" title="Basic tab 3">
        <p>three</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel4" title="Basic tab 4">
        <p>four</p>
        <img class="thumbnail" src="https://get.foundation/sites/docs/assets/img/generic/rectangle-2.jpg" />
      </fas-tab>

      <fas-tab id="panel5" title="Basic tab 5">
        <p>five</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel6" title="Basic tab 6">
        <p>six</p>
        <img class="thumbnail" src="https://get.foundation/sites/docs/assets/img/generic/rectangle-8.jpg" />
      </fas-tab>
    </fas-tabs>
  `,
});
