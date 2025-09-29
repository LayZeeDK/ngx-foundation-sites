import * as NativeProgress from '../../support/progress-bar/native-progress.po';

describe('Native Progress', () => {
  beforeEach(() => {
    NativeProgress.navigateTo();
  });

  it('displays a native progress element', () => {
    NativeProgress.getProgress().should('exist');
  });

  it('has default values', () => {
    NativeProgress.getProgress().then(progress => {
      cy.wrap(progress.getValue()).should('equal', 0);
      cy.wrap(progress.getMax()).should('equal', 1);
    });
  });

  it('has primary color by default', () => {
    NativeProgress.getProgress()
      .then(progress => progress.getColor())
      .should('equal', 'primary');
  });
});