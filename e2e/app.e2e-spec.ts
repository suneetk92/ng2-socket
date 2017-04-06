import { Ng2SocketPage } from './app.po';

describe('ng2-socket App', () => {
  let page: Ng2SocketPage;

  beforeEach(() => {
    page = new Ng2SocketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
