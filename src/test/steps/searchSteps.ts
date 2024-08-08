import { Then } from "@cucumber/cucumber";
import { SearchPage } from '../../pages/searchPage';

let searchPage: SearchPage;


Then('I should see search results page title is {string}', async function (expectedTitle: string) {
    searchPage = new SearchPage();
    await searchPage.verifySearchResultsTitle(expectedTitle);
});