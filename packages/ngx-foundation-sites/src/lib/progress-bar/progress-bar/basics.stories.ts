import type { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { fasProgressBarDeclarables } from './progress-bar-declarables';

const meta: Meta = {
  title: 'Media/Progress Bar',
  decorators: [
    moduleMetadata({
      imports: [fasProgressBarDeclarables],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Show your progress. A simple way to add progress bars to your layouts. You only
need two components to make them and they're easy to customize.

A progress bar has two single components: the container \`<fas-progress-bar>\`,
and the meter \`<fas-progress-meter>\`. The \`role\` and \`aria-\` attributes
are automatically set to clarify the status of the bar:

* \`aria-valuemin\`: Minimum value.
* \`aria-valuemax\`: Maximum value.
* \`aria-valuenow\`: Current value.

If the value of the progress bar is not numeric, also add the
\`<fas-progress-meter-text>\` component with an \`acccessibleText\` value which
should include a human-readable version of the bar's value. This is added to the
\`aria-valuetext\` attribute of the progress bar.

Increase the \`value\` input property of the \`<fas-progress-meter>\` component
to fill the progress bar.`,
      },
    },
  },
};

export default meta;

export interface BasicsArgs {
  readonly min: number;
  readonly max: number;
  readonly value: number;
}
export const Basics: Story<BasicsArgs> = args => ({
  props: args,
  template: `
    <fas-progress-bar>
      <fas-progress-meter [min]="min" [max]="max" [value]="value">
        <fas-progress-meter-text
          accessibleText="50 percent"
        ></fas-progress-meter-text>
      </fas-progress-meter>
    </fas-progress-bar>
  `,
});
Basics.args = {
  min: 0,
  max: 100,
  value: 50,
};
