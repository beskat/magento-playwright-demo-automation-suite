import { When,Then } from "@cucumber/cucumber";
import { ShoppingPage } from '../../pages/shoppingPage';

let shoppingPage: ShoppingPage;


Then('I should be on tees page with title {string}', async function (expectedTitle: string) {
    shoppingPage = new ShoppingPage();
    await shoppingPage.verifyShoppingPageTitle(expectedTitle);
});
  
Then('I verify the tee {string} is displayed on the page', async function (teeName: string) {
await shoppingPage.verifyTeeDisplayed(teeName);
});

When('I click on the tee {string}', async function (teeName: string) {
await shoppingPage.clickOnTee(teeName);
});

Then('I should be on the tee page with title {string}', async function (expectedTitle: string) {
await shoppingPage.verifyShoppingPageTitle(expectedTitle);
});

When('I select size {string}', async function (size: string) {
await shoppingPage.selectSize(size);
});

When('I select color {string}', async function (color: string) {
await shoppingPage.selectColor(color);
});

When('I click on Add to Cart button', async function () {
await shoppingPage.clickAddToCart();
});

Then('I should see the message {string} on the page', async function (expectedMessage: string) {
await shoppingPage.verifyCartMessage(expectedMessage);
});