import { UnnaPage } from './app.po';

describe('unna App', () => {
  let page: UnnaPage;

  beforeEach(() => {
    page = new UnnaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
