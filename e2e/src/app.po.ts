import { browser, by, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';

export class AppPage {
  navigateTo(): promise.Promise<any> {
    return browser.get('/home');
  }

  getParagraphText(): promise.Promise<string> {
    return element(by.css('h3')).getText();
  }

  getEmailInput(): ElementFinder {
    return element(by.css('input[type="email"]'));
  }

  getPasswordInput(): ElementFinder {
    return element(by.css('input[type="password"]'));
  }

  getButton(): ElementFinder {
    return element(by.css('.button'));
  }

  getErrors(): ElementArrayFinder {
    return element.all(by.css('.error'));
  }
}
