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
Set the \`collapsing\` input property of a tabstrip to collapse active tabs.`,
      },
    },
  },
};

export default meta;

export const CollapsingTabs: Story = args => ({
  props: args,
  template: `
    <fas-tabs id="collapsing-tabs" [collapsing]="collapsing">
      <fas-tab id="panel1c" title="Collapsing tab 1" [active]="true">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </fas-tab>

      <fas-tab id="panel2c" title="Collapsing tab 2">
        <p>
          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu
          tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
          molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
          dictum feugiat nisl ut dapibus.
        </p>
      </fas-tab>

      <fas-tab id="panel3c" title="Collapsing tab 3">
        <img class="thumbnail" src="https://get.foundation/sites/docs/assets/img/generic/rectangle-3.jpg" />
      </fas-tab>

      <fas-tab id="panel4c" title="Collapsing tab 4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </fas-tab>
    </fas-tabs>
  `,
});
CollapsingTabs.args = {
  collapsing: true,
};
