import * as CardDivider from '../../support/card/card-divider.po';

describe('Card with divider', () => {
  beforeEach(() => {
    CardDivider.navigateTo();
  });

  it('displays a card with divider', () => {
    CardDivider.getCard().should('exist');
    CardDivider.getCardDivider().should('exist');
  });

  it('divider displays expected content', () => {
    CardDivider.getCardDivider()
      .getTextContent()
      .should('contain', "I'm featured");
  });

  it('card displays complete content including divider and section', () => {
    CardDivider.getCard().getTextContent().should('contain', "I'm featured");
    CardDivider.getCard()
      .getTextContent()
      .should('contain', 'This card makes use of the');
  });

  it('card contains image', () => {
    cy.get('fas-card img').should('exist');
    cy.get('fas-card img').should('be.visible');
  });
});
