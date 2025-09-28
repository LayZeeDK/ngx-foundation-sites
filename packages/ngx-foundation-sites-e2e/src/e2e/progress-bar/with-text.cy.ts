import * as WithText from '../../support/progress-bar/with-text.po';

describe('Progress bar with text', () => {
  describe('Text Only', () => {
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

  describe('With Accessible Text', () => {
    beforeEach(() => {
      WithText.navigateTo('With Accessible Text');
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

  describe('Accessible Text Only', () => {
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
});