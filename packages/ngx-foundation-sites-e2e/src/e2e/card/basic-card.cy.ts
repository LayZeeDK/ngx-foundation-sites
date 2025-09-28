import * as BasicCard from '../../support/card/basic-card.po';

describe('Basic card', () => {
  beforeEach(() => {
    BasicCard.navigateTo();
  });

  it('displays a basic card', () => {
    BasicCard.getCard().should('exist');
  });

  it('displays a card divider', () => {
    BasicCard.getCardDivider()
      .getTextContent()
      .should('contain', 'This is a header');
  });

  it('displays an image', () => {
    BasicCard.getImage().should('be.visible');
  });

  it('displays a card section', () => {
    BasicCard.getCardSection()
      .getTextContent()
      .should('contain', 'This is a card')
      .and(
        'contain',
        'It has an easy to override visual style, and is appropriately subdued.'
      );
  });

  describe('Controls', () => {
    it('divider text is editable', () => {
      BasicCard.setDividerText('Test header');

      BasicCard.getCardDivider()
        .getTextContent()
        .should('contain', 'Test header');
    });

    it('image URL is editable', () => {
      BasicCard.setImageSrcUrl('https://placehold.co/485x248/png');

      BasicCard.getImage().should(
        'have.attr',
        'src',
        'https://placehold.co/485x248/png'
      );
    });

    it('section content is editable as Markdown', () => {
      BasicCard.setSectionContentMarkdown('# Test heading');

      BasicCard.getCardSectionHost()
        .findByRole('heading', { level: 1, name: /test heading/iu })
        .should('be.visible');
    });
  });
});
