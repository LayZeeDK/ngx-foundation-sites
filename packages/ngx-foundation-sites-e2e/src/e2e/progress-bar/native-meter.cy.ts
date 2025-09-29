import * as NativeMeter from '../../support/progress-bar/native-meter.po';

describe('Native Meter', () => {
  beforeEach(() => {
    NativeMeter.navigateTo();
  });

  it('displays a native meter element', () => {
    NativeMeter.getMeter().should('exist');
  });

  it('has story values', () => {
    NativeMeter.getMeter().then(meter => {
      cy.wrap(meter.getValue()).should('equal', 30);
      cy.wrap(meter.getMax()).should('equal', 100);
      cy.wrap(meter.getMin()).should('equal', 0);
      cy.wrap(meter.getHigh()).should('equal', 66);
      cy.wrap(meter.getLow()).should('equal', 33);
      cy.wrap(meter.getOptimum()).should('equal', 100);
    });
  });

  it('has no color by default', () => {
    NativeMeter.getMeter()
      .then(meter => meter.getColor())
      .should('equal', null);
  });
});
