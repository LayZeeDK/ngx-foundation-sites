import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FasMeterComponent } from './meter.component';

const meta: Meta = {
  title: 'Media/Progress Bar',
  decorators: [
    moduleMetadata({
      imports: [FasMeterComponent],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
For the extra adventurous developers out there, we also provide the
\`<meter fas-meter>\` component extending the \`<meter>\` element. What's the
difference?
\`<progress>\` represents a value that changes over time, like storage capacity.
\`<meter>\` represents a value that fluctuates around some optimum value.

The meter automatically colors itself based on the current values, and the
defined low, medium, and high ranges.
[Learn more about the mechanics of \`<meter>\` values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter).`,
      },
    },
  },
};

export default meta;

export const NativeMeter: Story = args => ({
  props: args,
  template: `
    <meter fas-meter
      [min]="min"
      [max]="max"
      [value]="value"
      [low]="low"
      [high]="high"
      [optimum]="optimum"
    ></meter>
  `,
});
NativeMeter.args = {
  min: 0,
  max: 100,
  value: 30,
  low: 33,
  high: 66,
  optimum: 100,
};
