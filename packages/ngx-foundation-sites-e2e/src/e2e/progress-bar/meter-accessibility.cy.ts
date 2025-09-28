import * as MeterPage from '../../support/progress-bar/meter.po';

describe('Progress Bar Meter Accessibility', () => {
  describe('Basic Meter Component', () => {
    beforeEach(() => {
      MeterPage.navigateToBasicMeter();
    });

    it('displays the meter element', () => {
      MeterPage.getBasicMeter().should('be.visible');
    });

    it('has correct meter attributes', () => {
      MeterPage.getBasicMeter()
        .should('have.attr', 'min', '0')
        .and('have.attr', 'max', '100')
        .and('have.attr', 'value', '30')
        .and('have.attr', 'low', '33')
        .and('have.attr', 'high', '66')
        .and('have.attr', 'optimum', '100');
    });
  });

  describe('Meter with Accessibility Labels', () => {
    beforeEach(() => {
      MeterPage.navigateTo();
    });

    it('displays the meter with accessibility features', () => {
      MeterPage.getMeter().should('be.visible');
      MeterPage.getDescriptionText().should('be.visible');
    });

    it('has proper accessibility attributes', () => {
      MeterPage.checkAccessibilityAttributes();
    });

    it('has correct aria-label', () => {
      MeterPage.getMeter().should('have.attr', 'aria-label', 'Storage usage');
    });

    it('has correct aria-describedby reference', () => {
      MeterPage.getMeter().should(
        'have.attr',
        'aria-describedby',
        'meter-description'
      );
      MeterPage.getDescriptionText().should('have.id', 'meter-description');
    });

    it('has informative title attribute', () => {
      MeterPage.getMeter().should('have.attr', 'title');
    });

    it('displays descriptive text explaining meter ranges', () => {
      MeterPage.getDescriptionText()
        .should(
          'contain.text',
          'Storage usage meter showing current utilization levels'
        )
        .and('contain.text', 'Values below 33 are considered low')
        .and('contain.text', '33-66 are medium')
        .and('contain.text', 'above 66 are high usage');
    });

    it('has correct meter value and ranges', () => {
      MeterPage.getMeter()
        .should('have.attr', 'min', '0')
        .and('have.attr', 'max', '100')
        .and('have.attr', 'value', '45')
        .and('have.attr', 'low', '33')
        .and('have.attr', 'high', '66')
        .and('have.attr', 'optimum', '100');
    });

    it('demonstrates accessibility in action', () => {
      // Verify the meter is properly labeled for screen readers
      MeterPage.getMeter().should('have.attr', 'aria-label');

      // Verify descriptive text is linked
      MeterPage.getMeter().should('have.attr', 'aria-describedby');

      // Verify tooltip is available
      MeterPage.getMeter().should('have.attr', 'title');

      // Verify the meter shows in medium range (orange color)
      MeterPage.getMeter().should('have.attr', 'value', '45');

      // Take a screenshot to document the accessibility implementation
      cy.screenshot('meter-accessibility-demo');
    });
  });
});
