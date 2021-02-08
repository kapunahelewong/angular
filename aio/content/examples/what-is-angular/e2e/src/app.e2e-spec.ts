import { browser, element, by, logging } from 'protractor';


describe('What is Angular', () => {

  const paragraphs = element.all(by.css('p'));
  const buttons = element.all(by.css('button'));
  const templateButton = buttons.get(0);
  const templateText = paragraphs.get(1);
  const ngIfButton = buttons.get(1);
  const ngIfText = paragraphs.get(2);
  const diButton = buttons.get(2);

  beforeEach(() => browser.get(''));

  // helper function to test what's logged to the console
  async function logChecker(contents) {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    const messages = logs.filter(({ message }) => message.indexOf(contents) !== -1 ? true : false);
    expect(messages.length).toBeGreaterThan(0);
  }

  it('should display Hello World', async () => {
    expect(await element(by.css('hello-world h1')).getText()).toEqual('Hello World');
  });

  it('should add 123 to editable p tag', async () => {
    await templateButton.click();
    await templateText.click();
    await templateText.sendKeys('123');
    expect(await templateText.getText()).toContain('123');
  });

  // Test for ngIf section
  it('should display edit instructions', async () => {
    await ngIfButton.click();
    expect(await ngIfText.getText()).toEqual('You can edit the following paragraph.');
  });

  it('should display You can edit me!', async () => {
    await templateButton.click();
    expect(await templateText.getText()).toEqual('You can edit me!');
  });

  it('should log the count', async () => {
    await diButton.click();
    await logChecker(0);
  });

});
