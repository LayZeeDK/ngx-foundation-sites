import { Basics } from './basics.stories';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FasProgressBarModule } from './progress-bar.module';

const meta: Meta = {
  title: 'Media/Progress Bar/Colors',
  decorators: [
    moduleMetadata({
      imports: [FasProgressBarModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
A progress bar can be styled with the \`secondary\`, \`success\`, \`warning\`,
and \`alert\` \`color\` values.`,
      },
    },
  },
};

export default meta;

export const Colors: Story = args => ({
  props: {
    ...Basics.args,
    ...args,
  },
  template: `
    <fas-progress-bar [color]="color">
      <fas-progress-meter [value]="value"></fas-progress-meter>
    </fas-progress-bar>
  `,
});
Colors.args = {
  color: 'secondary',
};
Colors.argTypes = {
  color: {
    control: 'select',
    options: ['primary', 'secondary', 'success', 'warning', 'alert'],
  },
};
