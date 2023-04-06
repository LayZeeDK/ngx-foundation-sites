import {
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs';
import { createElement } from 'react';

export const DocsPage = () => [
  createElement(Title),
  createElement(Subtitle),
  createElement(Description),
  createElement(Primary),
  // Disable ArgsTable since the controls don't work for Angular stories in
  // iframes on the DocsPage.
  // createElement(ArgsTable, { story: PRIMARY_STORY }),
  createElement(Stories),
];
