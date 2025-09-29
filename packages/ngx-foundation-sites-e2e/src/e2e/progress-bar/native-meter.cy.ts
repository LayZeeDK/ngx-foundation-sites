import * as NativeMeter from '../../support/progress-bar/native-meter.po';

describe('Native Meter', () => {
  beforeEach(() => {
    NativeMeter.navigateTo();
  });

  it('displays a native meter element', () => {
    NativeMeter.getMeter().should('exist');
  });

  it('has default values', () => {
    NativeMeter.getMeter().then(meter => {
      cy.wrap(meter.getValue()).should('equal', 0);
      cy.wrap(meter.getMax()).should('equal', 1);
      cy.wrap(meter.getMin()).should('equal', 0);
      cy.wrap(meter.getHigh()).should('equal', 1);
      cy.wrap(meter.getLow()).should('equal', 0);
      cy.wrap(meter.getOptimum()).should('equal', 0.5);
    });
  });

  it('has no color by default', () => {
    NativeMeter.getMeter()
      .then(meter => meter.getColor())
      .should('equal', null);
  });
});