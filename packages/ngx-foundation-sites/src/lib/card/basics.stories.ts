import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MarkdownToHtmlPipe } from '@workspace-storybook/ui-markdown';
import { SanitizeUrlPipe } from '@workspace-storybook/ui-security';
import { FasCardModule } from './card.module';

const meta: Meta = {
  title: 'Containers/Card',
  decorators: [
    moduleMetadata({
      imports: [FasCardModule, MarkdownToHtmlPipe, SanitizeUrlPipe],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Cards are a popular and flexible UI component.

A card is an element which you can put any kind of content inside. Make sure you
wrap your content in a \`<fas-card-section>\` element in order to achieve the
traditional card look.

A card container has no padding, allowing you to place full-bleed images inside.
Use the \`<fas-card-divider>\` and \`<fas-card-section>\` components to
sub-divide a card.

>The \`<fas-card>\` and \`<fas-card-divider>\` elements are flexbox containers.
This allows you to use Flexbox Utilities to create more flexible layouts.`,
      },
    },
  },
};

export default meta;

export const Basics: Story = args => ({
  props: args,
  template: `
    <fas-card [style.width.px]="300">
      <fas-card-divider>{{ dividerText }}</fas-card-divider>
      <img [src]="imageSrcUrl | sbSanitizeUrl" />
      <fas-card-section>
        <div [innerHTML]="sectionContentMarkdown | sbMarkdownToHtml"></div>
      </fas-card-section>
    </fas-card>
  `,
});
Basics.args = {
  dividerText: 'This is a header',
  imageSrcUrl:
    'https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg',
  sectionContentMarkdown: `#### This is a card.

It has an easy to override visual style, and is appropriately subdued.`,
};
Basics.argTypes = {
  dividerText: {
    description: '<code><fas-card-divider></code> text',
  },
  imageSrcUrl: {
    description: '<code>&lt;img src&gt;</code> URL',
  },
  sectionContentMarkdown: {
    description: '<code><fas-card-section></code> content in Markdown',
  },
};
Basics.parameters = {
  controls: { expanded: true },
};
