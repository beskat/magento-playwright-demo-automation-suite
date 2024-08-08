import { getPage } from "../hooks/baseHook";
import { expect } from "@playwright/test";

export class ShoppingPage {
  readonly shoppingPageTitle = getPage().locator('h1.page-title');
  readonly teeItem = (teeName: string) => getPage().locator(`text="${teeName}"`);
  readonly sizeOption = (size: string) => getPage().locator(`xpath=//*[contains(@class,'swatch-option text') and @option-label='${size}']`);
  readonly colorOption = (color: string) => getPage().locator(`xpath=//*[contains(@class,'swatch-option color') and @option-label='${color}']`);
  readonly addToCartButton = getPage().locator('button#product-addtocart-button');
  readonly cartMessage = getPage().locator('.message-success.success.message');

  
  async verifyShoppingPageTitle(expectedTitle: string) {
    await expect(this.shoppingPageTitle).toHaveText(expectedTitle);
  }

  async verifyTeeDisplayed(teeName: string) {
    await expect(this.teeItem(teeName)).toBeVisible();
  }

  async clickOnTee(teeName: string) {
    await this.teeItem(teeName).click();
  }

  async selectSize(size: string) {
    await this.sizeOption(size).click();
  }

  async selectColor(color: string) {
    await this.colorOption(color).click();
  }

  async clickAddToCart() {
    await this.addToCartButton.click();
  }

  async verifyCartMessage(expectedMessage: string) {
    await expect(this.cartMessage).toHaveText(expectedMessage);
  }
}