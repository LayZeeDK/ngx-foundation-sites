import * as App from '../support/app.po';

describe('Example app', () => {
  beforeEach(() => App.navigateTo());

  it('displays welcome message', () => {
    App.getTitle().should('contain.text', 'Foundation for Angular Sites');
  });
});
