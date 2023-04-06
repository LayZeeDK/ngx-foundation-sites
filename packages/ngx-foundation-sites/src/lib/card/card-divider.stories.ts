import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MarkdownToHtmlPipe } from '@workspace-storybook/ui-markdown';
import { SanitizeUrlPipe } from '@workspace-storybook/ui-security';
import { FasCardModule } from './card.module';

const meta: Meta = {
  title: 'Containers/Card/Card Divider',
  decorators: [
    moduleMetadata({
      imports: [FasCardModule, MarkdownToHtmlPipe, SanitizeUrlPipe],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
You can also include a \`<fas-card-divider>\` element as a title, footer or to
break up content.`,
      },
    },
  },
};

export default meta;

export const CardDivider: Story = args => ({
  props: args,
  template: `
    <fas-card [style.width.px]="300">
      <fas-card-divider [innerHTML]="dividerContentMarkdown | sbMarkdownToHtml"></fas-card-divider>
      <img [src]="imageSrcUrl | sbSanitizeUrl" />
      <fas-card-section>
        <div [innerHTML]="sectionContentMarkdown | sbMarkdownToHtml"></div>
      </fas-card-section>
    </fas-card>
  `,
});
CardDivider.args = {
  dividerContentMarkdown: "#### I'm featured",
  imageSrcUrl:
    'https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg',
  sectionContentMarkdown:
    'This card makes use of the `<fas-card-divider>` component.',
};
CardDivider.argTypes = {
  dividerContentMarkdown: {
    description: '<code><fas-card-divider></code> content in Markdown',
  },
  imageSrcUrl: {
    description: '<code>&lt;img src&gt;</code> URL',
  },
  sectionContentMarkdown: {
    description: '<code><fas-card-section></code> content in Markdown',
  },
};
CardDivider.parameters = {
  controls: { expanded: true },
  docs: {
    description: {
      story:
        'You can also include a `<fas-card-divider>` component as a title, footer or to break up content.',
    },
  },
};
