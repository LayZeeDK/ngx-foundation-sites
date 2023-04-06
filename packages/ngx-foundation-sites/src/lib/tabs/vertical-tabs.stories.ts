import { provideLocationMocks } from '@angular/common/testing';
import { provideRouter } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FasTabsModule } from './tabs.module';

const meta: Meta = {
  title: 'Containers/Tabs',
  decorators: [
    moduleMetadata({
      imports: [FasTabsModule],
      providers: [provideRouter([]), provideLocationMocks()],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Set the \`vertical\` input property of a tabstrip to stack tabs vertically.`,
      },
    },
  },
};

export default meta;

export const VerticalTabs: Story = args => ({
  props: args,
  template: `
    <style>
    .example-grid {
      display: grid;
      grid-template-columns: 1fr 3fr;
    }
    </style>

    <fas-tabs id="vertical-tabs" [class.example-grid]="vertical" [vertical]="vertical">
      <fas-tab id="panel1v" title="Vertical tab 1" [active]="true">
        <p>One</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel2v" title="Vertical tab 2">
        <p>Two</p>
        <img class="thumbnail" src="https://get.foundation/sites/docs/assets/img/generic/rectangle-7.jpg" />
      </fas-tab>

      <fas-tab id="panel3v" title="Vertical tab 3">
        <p>Three</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel4v" title="Vertical tab 4">
        <p>Four</p>
        <img class="thumbnail" src="https://get.foundation/sites/docs/assets/img/generic/rectangle-2.jpg" />
      </fas-tab>

      <fas-tab id="panel5v" title="Vertical tab 5">
        <p>Five</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </fas-tab>

      <fas-tab id="panel6v" title="Vertical tab 6">
        <p>Six</p>
        <img class="thumbnail" src="https://get.foundation/sites/docs/assets/img/generic/rectangle-8.jpg" />
      </fas-tab>
    </fas-tabs>
  `,
});
VerticalTabs.args = {
  vertical: true,
};
