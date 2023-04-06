import { Basics } from './basics.stories';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FasProgressBarModule } from './progress-bar.module';

const meta: Meta = {
  title: 'Media/Progress Bar/With Text',
  decorators: [
    moduleMetadata({
      imports: [FasProgressBarModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
You can add text inside the \`<fas-progress-meter-text>\` component. The text
you use in the meter is automatically used in the \`aria-valuetext\` attribute.`,
      },
    },
  },
};

export default meta;

export const TextOnly: Story = args => ({
  props: {
    ...Basics.args,
    ...args,
  },
  template: `
    <fas-progress-bar>
      <fas-progress-meter [value]="value">
        <fas-progress-meter-text>{{ value }}%</fas-progress-meter-text>
      </fas-progress-meter>
    </fas-progress-bar>
  `,
});
TextOnly.args = {
  value: 25,
};

export const WithAccessibleText: Story = args => ({
  props: {
    ...Basics.args,
    ...args,
  },
  template: `
    <fas-progress-bar>
      <fas-progress-meter [value]="value">
        <fas-progress-meter-text accessibleText="{{ value }}{{ accessibleTextSuffix }}">{{ value }}%</fas-progress-meter-text>
      </fas-progress-meter>
    </fas-progress-bar>
  `,
});
WithAccessibleText.args = {
  accessibleTextSuffix: ' percent',
  value: TextOnly.args['value'],
};
WithAccessibleText.parameters = {
  docs: {
    description: {
      story: `
To specify a different \`aria-valuetext\` attribute, use the \`accessibleText\` value.`,
    },
  },
};

export const AccessibleTextOnly: Story = args => ({
  props: {
    ...Basics.args,
    ...args,
  },
  template: `
    <fas-progress-bar>
      <fas-progress-meter [value]="value">
        <fas-progress-meter-text accessibleText="{{ value }}{{ accessibleTextSuffix }}"></fas-progress-meter-text>
      </fas-progress-meter>
    </fas-progress-bar>
  `,
});
AccessibleTextOnly.args = {
  accessibleTextSuffix: WithAccessibleText.args['accessibleTextSuffix'],
  value: WithAccessibleText.args['value'],
};
AccessibleTextOnly.parameters = {
  docs: {
    description: {
      story: `
To only use the \`aria-valuetext\` attribute, use the \`accessibleText\` value and leave out the meter text content.`,
    },
  },
};
