import { AngularCodeStudioPage } from './app.po';

describe('angular-code-studio App', () => {
  let page: AngularCodeStudioPage;

  beforeEach(() => {
    page = new AngularCodeStudioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
