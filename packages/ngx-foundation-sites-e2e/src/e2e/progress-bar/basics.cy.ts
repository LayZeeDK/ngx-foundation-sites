import * as Basics from '../../support/progress-bar/basics.po';

describe('Basic progress bar', () => {
  beforeEach(() => {
    Basics.navigateTo();
  });

  it('displays a progress bar with correct role', () => {
    Basics.getProgressBar().getRole().should('equal', 'progressbar');
  });

  it('has the correct default value', () => {
    Basics.getProgressBar().getValue().should('equal', 50);
  });

  it('has the correct min and max values', () => {
    Basics.getProgressBar().getMin().should('equal', 0);
    Basics.getProgressBar().getMax().should('equal', 100);
  });

  it('has the default primary color', () => {
    Basics.getProgressBar().getColor().should('equal', 'primary');
  });

  it('contains a progress meter', () => {
    Basics.getProgressBar().getMeter().should('exist');
  });
});