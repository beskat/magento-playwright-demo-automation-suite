import { When, Then, DataTable } from "@cucumber/cucumber";
import { HomePage } from '../../pages/homePage';

let homePage: HomePage;


When('I go to the home page', async function () {
    homePage = new HomePage();
    await homePage.goToBaseUrl();
});

Then('The page title should be {string}', async function (expectedTitle: string) {
    await homePage.verifyPageTitle(expectedTitle);
});

Then('The site logo should be visible', async function () {
    await homePage.verifyLogo();
});

Then('I should see the main navigation menu', async function () {
    await homePage.verifyMainNavigationMenu();
});

Then('I should see the following sections in the navigation:', async function (dataTable: DataTable) {
    const expectedSections = dataTable.raw().flat();
    await homePage.verifyNavigationSections(expectedSections);
});

When('I enter {string} in the search bar', async function (query: string) {
    await homePage.enterSearchQuery(query);
});

When('I click the search button', async function () {
    await homePage.clickSearchButton();
});

When('I click Create an Account link', async function () {
    await homePage.clickCreateAccountLink();
});

When('I click Sign In link', async function () {
    await homePage.clickSignInLink();
});

When('I click on {string} in the navigation menu', async function (menuItem: string) {
    await homePage.clickNavigationMenuItem(menuItem);
});

When('I navigate to Men>Tops>Tees page', async function () {
    await homePage.navigateToMenTees();
});

When('I scroll down to the bottom of the page', async function () {
    await homePage.scrollToBottom();
  });
  
Then('I should see the following footer link names:', async function (dataTable: DataTable) {
    const linkNames = dataTable.raw().flat();
    for (const linkName of linkNames) {
      await homePage.verifyFooterLinkName(linkName);
    }
});
