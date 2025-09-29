import * as WithText from '../../support/progress-bar/with-text.po';

describe('Progress bar with text - Text Only', () => {
  beforeEach(() => {
    WithText.navigateTo('Text Only');
  });

  it('displays a progress bar with correct role', () => {
    WithText.getProgressBar().getRole().should('equal', 'progressbar');
  });

  it('has the correct value', () => {
    WithText.getProgressBar().getValue().should('equal', 25);
  });

  it('contains meter text', () => {
    WithText.getProgressBar()
      .getMeter()
      .then(meter => meter.getMeterText())
      .should('exist');
  });

  it('displays the correct text content', () => {
    WithText.getProgressBar()
      .getMeter()
      .then(meter => meter.getMeterText())
      .then(meterText => meterText.getText())
      .should('equal', '25%');
  });
});
