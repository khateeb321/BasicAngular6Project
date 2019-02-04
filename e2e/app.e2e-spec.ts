import { BasicAngular6ProjectPage } from './app.po';

describe('basic-angular6-project App', function() {
  let page: BasicAngular6ProjectPage;

  beforeEach(() => {
    page = new BasicAngular6ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
