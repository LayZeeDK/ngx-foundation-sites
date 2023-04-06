import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MarkdownToHtmlPipe } from '@workspace-storybook/ui-markdown';
import { SanitizeUrlPipe } from '@workspace-storybook/ui-security';
import { FasCardModule } from './card.module';

const meta: Meta = {
  title: 'Containers/Card/Images',
  decorators: [
    moduleMetadata({
      imports: [FasCardModule, MarkdownToHtmlPipe, SanitizeUrlPipe],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Images play nicely with cards. Simply include one outside of the \`<fas-card-section>\`
element to span nicely to the edges. Or move the image inside the \`<fas-card-section>\`
to have padding around the image.`,
      },
    },
  },
};

export default meta;

export const Simple: Story = args => ({
  props: args,
  template: `
    <div class="grid-x grid-margin-x small-up-3">
      <div class="cell">
        <!-- image has no padding -->
        <fas-card>
          <img [src]="imageSrcUrl | sbSanitizeUrl" />
          <fas-card-section>
            <div [innerHTML]="sectionContentMarkdown | sbMarkdownToHtml"></div>
          </fas-card-section>
        </fas-card>
      </div>
    </div>
  `,
});
Simple.args = {
  imageSrcUrl:
    'https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg',
  sectionContentMarkdown: 'This is a simple card with an image.',
};
Simple.argTypes = {
  imageSrcUrl: {
    description: '<code>&lt;img src&gt;</code> URL',
  },
  sectionContentMarkdown: {
    description: '<code><fas-card-section></code> content in Markdown',
  },
};
Simple.parameters = {
  controls: { expanded: true },
  docs: {
    description: {
      story:
        'Images play nicely with cards. Simply include one outside of the `<fas-card-section>` component to span nicely to the edges. Or move the image inside the `<fas-card-section>` to have padding around the image.',
    },
  },
};

export const InSection: Story = args => ({
  props: args,
  template: `
    <div class="grid-x grid-margin-x small-up-3">
      <div class="cell">
        <!-- image has padding -->
        <fas-card>
          <fas-card-section>
            <img [src]="imageSrcUrl | sbSanitizeUrl" />
          </fas-card-section>
          <fas-card-section>
            <div [innerHTML]="sectionContentMarkdown | sbMarkdownToHtml"></div>
          </fas-card-section>
        </fas-card>
      </div>
    </div>
  `,
});
InSection.args = {
  imageSrcUrl:
    'https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg',
  sectionContentMarkdown:
    'This is a simple card with an image inside a `<fas-card-section>`.',
};
InSection.argTypes = {
  imageSrcUrl: {
    description: '<code>&lt;img src&gt;</code> URL',
  },
  sectionContentMarkdown: {
    description: '<code><fas-card-section></code> content in Markdown',
  },
};
InSection.parameters = {
  controls: { expanded: true },
};

export const BelowContent: Story = args => ({
  props: args,
  template: `
    <div class="grid-x grid-margin-x small-up-3">
      <div class="cell">
        <fas-card>
          <fas-card-section>
            <div [innerHTML]="sectionContentMarkdown | sbMarkdownToHtml"></div>
          </fas-card-section>
          <img [src]="imageSrcUrl | sbSanitizeUrl" />
        </fas-card>
      </div>
    </div>
  `,
});
BelowContent.args = {
  imageSrcUrl:
    'https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg',
  sectionContentMarkdown: 'Images work just fine below the content too!',
};
BelowContent.argTypes = {
  imageSrcUrl: {
    description: '<code>&lt;img src&gt;</code> URL',
  },
  sectionContentMarkdown: {
    description: 'Images work just fine below the content too!',
  },
};
BelowContent.parameters = {
  controls: { expanded: true },
};
