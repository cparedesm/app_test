import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render login form', async () => {
    await page.navigateTo();
    const title = await page.getParagraphText();
    const email = page.getEmailInput();
    const pass = page.getPasswordInput();
    const button = page.getButton();
    const errors = await errorList(page);
    expect(title).toContain('Prueba técnica');
    expect(email).toBeTruthy();
    expect(pass).toBeTruthy();
    expect(button).toBeTruthy();
    expect(errors.length).toBeFalsy();
  });

  it('should not show errors when form is valid', async () => {
    await page.navigateTo();

    await setFormValues(page, 'a@a.com', '12345');
    await submitForm(page);

    const errors = await errorList(page);

    expect(errors.length).toBeFalsy();
  });

  it('should show errors when form fields are empty', async () => {
    await page.navigateTo();

    await setFormValues(page);
    await submitForm(page);
    const errors = await errorList(page);

    expect(errors.length).toBe(2)
  });

  it('should show errors when form fields are invalid', async () => {
    await page.navigateTo();

    await setFormValues(page, 'asdf', '1234');
    await submitForm(page);
    const errors = await errorList(page);

    expect(errors.length).toBe(2)
  });


});

async function errorList(page: AppPage) {
  const errors = await page.getErrors();
  return errors;
}

async function setFormValues(page: AppPage, emailValue = '', passValue = '') {
  const email = page.getEmailInput();
  const pass = page.getPasswordInput();

  await email.clear();
  await pass.clear();

  await email.sendKeys(emailValue);
  await pass.sendKeys(passValue);
}

async function submitForm(page: AppPage) {
  const button = page.getButton();
  await button.click();
}
