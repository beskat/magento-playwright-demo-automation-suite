import { Then } from "@cucumber/cucumber";
import { HomePage } from '../../pages/homePage';

let homePage: HomePage;


Then('I should be on the section page with title {string}', async function (expectedTitle: string) {
    homePage = new HomePage();
    await homePage.verifyPageTitle(expectedTitle);
  });