import { DocsPage } from './docs-page';
import { addParameters } from '@storybook/angular';

addParameters({
  docs: {
    iframeHeight: 400,
    page: DocsPage,
    source: {
      state: 'open',
    },
  },
  options: {
    storySort: {
      includeNames: true,
      method: 'configure',
      order: [
        'Containers',
        [
          'Card',
          [
            'Basics',
            'Card Divider',
            'Images',
            ['Simple', 'In Section', 'Below Content'],
            'Sizing',
            ['X-Y Block Grid', 'Flex Box Grid'],
          ],
          'Tabs',
          ['Basics', 'Vertical Tabs', 'Collapsting Tabs', 'Tabs and URLs'],
        ],
        'Media',
        [
          'Progress Bar',
          [
            'Basics',
            'Colors',
            'With Text',
            ['Text Only', 'With Accessible Text', 'Accessible Text Only'],
            'Native Progress',
            ['Simple', 'With Color'],
            'Native Meter',
          ],
        ],
      ],
    },
  },
});
