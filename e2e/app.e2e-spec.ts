import { LegalNavigatorPage } from './app.po';

describe('legal-navigator App', () => {
  let page: LegalNavigatorPage;

  beforeEach(() => {
    page = new LegalNavigatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
