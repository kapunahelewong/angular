import { browser, element, by, logging } from 'protractor';


describe('What is Angular', () => {

  const paragraphs = element.all(by.css('p'));
  const buttons = element.all(by.css('button'));
  const templateButton = buttons.get(0);
  const templateText = paragraphs.get(1);
  const ngIfButton = buttons.get(1);
  const ngIfText = paragraphs.get(2);



  beforeEach(() => browser.get(''));

  // helper function used to test what's logged to the console
  async function logChecker(contents) {
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    const messages = logs.filter(({ message }) => message.indexOf(contents) !== -1);
    expect(messages.length).toBeGreaterThan(0);
  }

  it('should display Welcome friend', async () => {
    expect(await element(by.css('hello-world h2')).getText()).toEqual('component-overview works!');
  });

  it('should display You can edit me!', async () => {
    await templateButton.click();
    expect(await templateText.getText()).toEqual('testing testing');
  });

  it('should add 123 to editable p tag', async () => {
    await templateButton.click();
    await templateText.click();
    await templateText.sendKeys('123');
    expect(await templateText.getText()).toContain('testing testing');
  });

  it('should display edit instructions', async () => {
    await ngIfButton.click();
    expect(await ngIfText.getText()).toEqual('testing testing');
  });

  // it('should have title Inputs and Outputs', async () => {
  //   expect(await templateButton.getText()).toEqual('Inputs and Outputs');
  // });

});


describe('providers App', () => {
  let page: AppPage;
  const buttons = element.all(by.css('button'));
  const customersButton = buttons.get(0);
  const ordersButton = buttons.get(1);

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
  });

  it('should display message saying app works', async () => {
    expect(await page.getTitleText()).toEqual('Lazy loading feature modules');
  });

  describe('Customers', () => {
    beforeEach(() => customersButton.click());

    it('should show customers when the button is clicked', async () => {
      const customersMessage = element(by.css('app-customers > p'));
      expect(await customersMessage.getText()).toBe('customers works!');
    });

  });

  describe('Orders', () => {
    beforeEach(() => ordersButton.click());

    it('should show orders when the button is clicked', async () => {
      const ordersMessage = element(by.css('app-orders > p'));
      expect(await ordersMessage.getText()).toBe('orders works!');
    });

  });

});
