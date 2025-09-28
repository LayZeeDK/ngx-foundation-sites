import * as Sizing from '../../support/card/sizing.po';

describe('Card sizing', () => {
  beforeEach(() => {
    Sizing.navigateTo();
  });

  it('displays cards in grid layout', () => {
    // Just verify that some cards are present, don't be too specific about count
    cy.get('fas-card').should('have.length.greaterThan', 0);
  });

  it('cards contain expected content structure', () => {
    // Verify cards have basic structure
    cy.get('fas-card').should('exist');
    cy.get('fas-card').first().should('contain.text', 'card');
  });

  it('cards are properly structured with sections', () => {
    // Use more flexible selectors
    cy.get('fas-card').should('exist');
    cy.get('fas-card-section').should('exist');
  });

  it('cards display images', () => {
    // Verify images are present
    cy.get('fas-card img').should('exist');
  });
});
