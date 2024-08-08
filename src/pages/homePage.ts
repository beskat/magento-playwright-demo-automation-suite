import { getPage } from "../hooks/baseHook";
import { expect } from "@playwright/test";

export class HomePage {
  readonly logo = getPage().locator('.logo');
  readonly mainNavigationMenu = getPage().locator('.navigation');
  readonly navSections = getPage().locator('xpath=//a[contains(@class,"level-top ui-corner-all")]');
  readonly searchBar = getPage().locator('#search');
  readonly searchButton = getPage().locator('button[title="Search"]');
  readonly createAccountLink = getPage().getByRole('link', { name: 'Create an Account' });
  readonly signInLink = getPage().getByRole('link', { name: 'Sign In' });
  readonly navigationMenuItem = (menuItem: string) => getPage().locator(`nav >> text="${menuItem}"`);
  readonly topsMenu = getPage().getByRole('menuitem', { name: 'Tops' });
  readonly teesLink = getPage().getByRole('menuitem', { name: 'Tees' });
  readonly footerLink = (linkName: string) => getPage().locator('.footer a').locator(`text="${linkName}"`);


  async goToBaseUrl() {
    const baseUrl = process.env.BASE_URL;
    if (!baseUrl) {
        throw new Error('BASE_URL is not defined.');
      }

    await getPage().goto(baseUrl);
  }

  async verifyPageTitle(expectedTitle: string) {
    await expect(getPage()).toHaveTitle(expectedTitle);
  }

  async verifyLogo() {
    await expect(this.logo).toBeVisible();
  }

  async verifyMainNavigationMenu() {
    await expect(this.mainNavigationMenu).toBeVisible();
  }

  async verifyNavigationSections(expectedSections: string[]) {
      const navSections = await this.navSections.allInnerTexts();
      expect(navSections).toEqual(expectedSections);
  }

  async enterSearchQuery(query: string) {
    await this.searchBar.fill(query);
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async clickCreateAccountLink() {
    await this.createAccountLink.click();
  }

  async clickSignInLink() {
    await this.signInLink.click();
  }

  async clickNavigationMenuItem(menuItem: string) {
    await this.navigationMenuItem(menuItem).click();
  }

  async navigateToMenTees() {
    await this.navigationMenuItem("Men").hover();
    await this.topsMenu.hover();
    await this.teesLink.click();
  }

  async scrollToBottom() {
    await getPage().evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async verifyFooterLinkName(linkName: string) {
    await expect(this.footerLink(linkName)).toBeVisible();
  }
}