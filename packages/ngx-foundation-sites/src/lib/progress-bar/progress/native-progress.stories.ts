import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FasProgressModule } from './progress.module';

const meta: Meta = {
  title: 'Media/Progress Bar/Native Progress',
  decorators: [
    moduleMetadata({
      imports: [FasProgressModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
As an alternative to our custom progress bar style, you can also opt to use the
\`<progress fas-progress>\` component which extends the native \`<progress>\`
element. It provides a more succinct way to create progress bars.`,
      },
    },
  },
};

export default meta;

export const Simple: Story = args => ({
  props: args,
  template: `
    <progress fas-progress [max]="max" [value]="value"></progress>
  `,
});
Simple.args = {
  max: 100,
  value: 75,
};

export const WithColor: Story = args => ({
  props: {
    ...Simple.args,
    ...args,
  },
  template: `
    <progress fas-progress [color]="color" [max]="max" [value]="value"></progress>
  `,
});
WithColor.args = {
  color: 'secondary',
};
WithColor.argTypes = {
  color: {
    control: 'select',
    options: ['primary', 'secondary', 'success', 'warning', 'alert'],
  },
};
WithColor.parameters = {
  docs: {
    description: {
      story: `
The \`<progress fas-progress>\` component can be styled with the same \`color\`
values: \`secondary\`, \`success\`, \`warning\`, and \`alert\`.`,
    },
  },
};
