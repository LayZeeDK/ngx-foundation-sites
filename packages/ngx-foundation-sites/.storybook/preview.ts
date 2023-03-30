import { DocsPage } from './docs-page';
import { addParameters } from '@storybook/angular';

addParameters({
  docs: {
    iframeHeight: 400,
    page: DocsPage,
  },
});
