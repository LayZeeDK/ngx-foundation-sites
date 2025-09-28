import * as Colors from '../../support/progress-bar/colors.po';

describe('Progress bar colors', () => {
  beforeEach(() => {
    Colors.navigateTo();
  });

  it('displays a progress bar with correct role', () => {
    Colors.getProgressBar().getRole().should('equal', 'progressbar');
  });

  it('has the secondary color applied', () => {
    Colors.getProgressBar().getColor().should('equal', 'secondary');
  });

  it('has the correct default value', () => {
    Colors.getProgressBar().getValue().should('equal', 50);
  });

  it('contains a progress meter', () => {
    Colors.getProgressBar().getMeter().should('exist');
  });

  it('meter should have the correct width percentage', () => {
    Colors.getProgressBar()
      .getMeter()
      .then(meter => meter.getWidthPercentage())
      .should('equal', 50);
  });
});