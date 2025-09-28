import * as WithText from '../../support/progress-bar/with-text.po';

describe('Progress bar with text - Accessible Text Only', () => {
  beforeEach(() => {
    WithText.navigateTo('Accessible Text Only');
  });

  it('displays a progress bar with correct role', () => {
    WithText.getProgressBar().getRole().should('equal', 'progressbar');
  });

  it('has the correct value', () => {
    WithText.getProgressBar().getValue().should('equal', 25);
  });

  it('contains meter text component', () => {
    WithText.getProgressBar()
      .getMeter()
      .then(meter => meter.getMeterText())
      .should('exist');
  });

  it('displays empty text content (accessible text only)', () => {
    WithText.getProgressBar()
      .getMeter()
      .then(meter => meter.getMeterText())
      .then(meterText => meterText.getText())
      .should('equal', '');
  });
});
