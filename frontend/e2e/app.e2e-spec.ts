import { FrontendSPAPage } from './app.po';

describe('frontend-spa App', () => {
  let page: FrontendSPAPage;

  beforeEach(() => {
    page = new FrontendSPAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
