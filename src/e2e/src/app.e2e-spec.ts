import { AppPage } from './app.po';

describe('Example app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('displays welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Foundation for Angular Sites');
  });
});
