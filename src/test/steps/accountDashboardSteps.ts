import { Then, When } from "@cucumber/cucumber";
import { AccountDashboardPage } from '../../pages/accountDashboardPage';

let accountDashboardPage: AccountDashboardPage;


Then('I should see the account dashboard with title {string}', async function (expectedTitle: string) {
    accountDashboardPage = new AccountDashboardPage();
    await accountDashboardPage.verifyDashboardTitle(expectedTitle);
});
  
Then('I should see greeting message {string}', async function (expectedMessage: string) {
await accountDashboardPage.verifyGreetingMessage(expectedMessage);
});