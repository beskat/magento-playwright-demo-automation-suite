import { expect } from '@playwright/test';
import { getPage } from '../hooks/baseHook';

export class AccountCreationPage {
  readonly firstNameInput = getPage().locator('#firstname');
  readonly lastNameInput = getPage().locator('#lastname');
  readonly emailInput = getPage().locator('#email_address');
  readonly passwordInput = getPage().locator('#password');
  readonly confirmPasswordInput = getPage().locator('#password-confirmation');
  readonly createAccountButton = getPage().locator('button[title="Create an Account"]');


  async verifyPageTitle(expectedTitle: string) {
    await expect(getPage()).toHaveTitle(expectedTitle);
  }

  async enterFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async enterConfirmPassword(confirmPassword: string) {
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }
}