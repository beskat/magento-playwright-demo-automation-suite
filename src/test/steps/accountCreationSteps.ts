import { When, Then } from "@cucumber/cucumber";
import { AccountCreationPage } from '../../pages/accountCreationPage';
import { StringUtil } from '../../utils/StringUtil';

let accountCreationPage: AccountCreationPage;

  
Then('I should be on account creation page with title {string}', async function (expectedTitle: string) {
    accountCreationPage = new AccountCreationPage();
    await accountCreationPage.verifyPageTitle(expectedTitle);
});

When('I enter first name {string}', async function (firstName: string) {
    await accountCreationPage.enterFirstName(firstName);
});

When('I enter last name {string}', async function (lastName: string) {
    await accountCreationPage.enterLastName(lastName);
});

When('I enter email {string}', async function (email: string) {
    const uniqueString = StringUtil.generateUniqueString(5);
    const processedEmail = email.replace('${uniqueString}', uniqueString);

    await accountCreationPage.enterEmail(processedEmail);
});

When('I enter password {string}', async function (password: string) {
    await accountCreationPage.enterPassword(password);
});

When('I enter confirm password {string}', async function (confirmPassword: string) {
    await accountCreationPage.enterConfirmPassword(confirmPassword);
});

When('I click Create an Account button', async function () {
    await accountCreationPage.clickCreateAccountButton();
});