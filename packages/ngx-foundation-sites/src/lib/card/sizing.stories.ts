import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FasCardModule } from './card.module';

const meta: Meta = {
  title: 'Containers/Card/Sizing',
  decorators: [
    moduleMetadata({
      imports: [FasCardModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
You can either set the width of cards with custom css or add them into the
Foundation grid.`,
      },
    },
  },
};

export default meta;

export const XYBlockGrid: Story = args => ({
  props: args,
  template: `
    <div class="grid-container">
      <div class="grid-x grid-margin-x small-up-2 medium-up-3">
        <div class="cell">
          <fas-card>
            <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
            <fas-card-section>
              <h4>This is a row of cards.</h4>
              <p>This row of cards is embedded in an X-Y Block Grid.</p>
            </fas-card-section>
          </fas-card>
        </div>
        <div class="cell">
          <fas-card>
            <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
            <fas-card-section>
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </fas-card-section>
          </fas-card>
        </div>
        <div class="cell">
          <fas-card>
            <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
            <fas-card-section>
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </fas-card-section>
          </fas-card>
        </div>
      </div>
    </div>
  `,
});
XYBlockGrid.storyName = 'X-Y Block Grid';

export const FlexBoxGrid: Story = args => ({
  props: args,
  template: `
    <div class="grid-x grid-margin-x small-up-2 medium-up-3">
      <div class="cell">
        <fas-card>
          <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
          <fas-card-section>
            <h4>This is a row of cards.</h4>
            <p>This row of cards is embedded in an Flex Block Grid.</p>
          </fas-card-section>
        </fas-card>
      </div>
      <div class="cell">
        <fas-card>
          <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
          <fas-card-section>
            <h4>This is a card.</h4>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
          </fas-card-section>
        </fas-card>
      </div>
      <div class="cell">
        <fas-card>
          <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
          <fas-card-section>
            <h4>This is a card.</h4>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
          </fas-card-section>
        </fas-card>
      </div>
    </div>
  `,
});
