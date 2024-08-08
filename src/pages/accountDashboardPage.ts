import { expect } from '@playwright/test';
import { getPage } from '../hooks/baseHook';

export class AccountDashboardPage {
  readonly dashboardTitle = getPage().locator('h1.page-title');
  readonly greetingMessage = getPage().locator('.greet.welcome .logged-in').first();


  async verifyDashboardTitle(expectedTitle: string) {
    await expect(this.dashboardTitle).toHaveText(expectedTitle);
  }

  async verifyGreetingMessage(expectedMessage: string) {
    await expect(this.greetingMessage).toHaveText(expectedMessage);
  }
}