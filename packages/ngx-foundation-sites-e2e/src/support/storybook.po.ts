export interface NavigateToOptions {
  readonly metaTitle: string;
  readonly storyName: string;
}
export const setControl = (argName: string, value: unknown) =>
  cy.changeArg(argName, value);
export const navigateTo = (options: NavigateToOptions) =>
  cy.loadStory(options.metaTitle, options.storyName);
export const setup = () => {
  cy.visitStorybook();
};
