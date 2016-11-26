import { CostSharingPage } from './app.po';

describe('cost-sharing App', function() {
  let page: CostSharingPage;

  beforeEach(() => {
    page = new CostSharingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
