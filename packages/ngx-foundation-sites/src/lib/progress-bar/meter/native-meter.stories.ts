import type { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
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
[Learn more about the mechanics of \`<meter>\` values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter).

### Enhanced Screen Reader Support

The \`<meter fas-meter>\` component provides enhanced accessibility through optional attributes:

* \`ariaLabel\`: Provides an accessible name for the meter
* \`ariaDescribedBy\`: References elements that describe the meter
* \`title\`: Provides tooltip text that's also available to screen readers`,
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

export const WithAccessibilityLabels: Story = args => ({
  props: args,
  template: `
    <div>
      <p id="meter-description">
        Storage usage meter showing current utilization levels.
        Values below {{ low }} are considered low,
        {{ low }}-{{ high }} are medium,
        and above {{ high }} are high usage.
      </p>
      <meter fas-meter
        [min]="min"
        [max]="max"
        [value]="value"
        [low]="low"
        [high]="high"
        [optimum]="optimum"
        [ariaLabel]="ariaLabel"
        [ariaDescribedBy]="ariaDescribedBy"
        [title]="title"
      ></meter>
    </div>
  `,
});
WithAccessibilityLabels.args = {
  min: 0,
  max: 100,
  value: 45,
  low: 33,
  high: 66,
  optimum: 100,
  ariaLabel: 'Storage usage',
  ariaDescribedBy: 'meter-description',
  title: 'Current storage usage: 45GB of 100GB available',
};
WithAccessibilityLabels.parameters = {
  docs: {
    description: {
      story: `
This example demonstrates enhanced accessibility features:
* \`ariaLabel\` provides a descriptive name for screen readers
* \`ariaDescribedBy\` references additional descriptive text
* \`title\` provides tooltip text that's available to both sighted users and screen readers`,
    },
  },
};
