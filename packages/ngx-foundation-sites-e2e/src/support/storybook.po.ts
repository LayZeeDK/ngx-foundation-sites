import { kebabCase } from 'lodash-es';

export interface NavigateToOptions {
  readonly metaTitle: string;
  readonly storyName: string;
}

export const navigateTo = (options: NavigateToOptions) =>
  cy.visit(
    `/iframe.html?id=${kebabCase(options.metaTitle)}--${kebabCase(
      options.storyName
    )}`
  );
