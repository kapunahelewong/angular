import { browser, element, by } from 'protractor';

describe('Hello World', () => {

  beforeAll(() => browser.get(''));

  it('should display Welcome friend', async () => {
    expect(await element(by.css('hello-world h2')).getText()).toEqual('component-overview works!');
  });

});
