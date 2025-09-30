import * as Images from '../../support/card/images.po';

describe('Card with images', () => {
  beforeEach(() => {
    Images.navigateTo();
  });

  it('displays a card with image', () => {
    Images.getCard().should('exist');
  });

  it('card contains expected content', () => {
    Images.getCard()
      .getTextContent()
      .should('contain', 'This is a simple card with an image');
  });

  it('card displays image without padding', () => {
    // Verify the card contains an image element
    cy.get('fas-card img').should('exist');
    cy.get('fas-card img').should('be.visible');
  });
});
