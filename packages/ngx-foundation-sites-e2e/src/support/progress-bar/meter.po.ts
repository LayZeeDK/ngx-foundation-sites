export const navigateTo = () =>
  cy.visit('/iframe.html?id=media-progress-bar--with-accessibility-labels');

export const getMeter = () => cy.get('meter[fas-meter]');

export const getDescriptionText = () => cy.get('#meter-description');

export const getMeterAriaLabel = () =>
  getMeter().should('have.attr', 'aria-label');

export const getMeterAriaDescribedBy = () =>
  getMeter().should('have.attr', 'aria-describedby');

export const getMeterTitle = () => getMeter().should('have.attr', 'title');

export const getMeterValue = () => getMeter().should('have.attr', 'value');

export const checkAccessibilityAttributes = () =>
  getMeter()
    .should('have.attr', 'aria-label')
    .and('have.attr', 'aria-describedby', 'meter-description')
    .and('have.attr', 'title');

export const navigateToBasicMeter = () =>
  cy.visit('/iframe.html?id=media-progress-bar--native-meter');

export const getBasicMeter = () => cy.get('meter[fas-meter]');
