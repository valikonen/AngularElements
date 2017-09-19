import { AngularElementsPage } from './app.po';

describe('angular-elements App', () => {
  let page: AngularElementsPage;

  beforeEach(() => {
    page = new AngularElementsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
