import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";
import dotenv from 'dotenv';

let browser: Browser
let page: Page

dotenv.config();
setDefaultTimeout(30000);

Before(async function () {
    browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
    page = await browser.newPage();
});

After(async function () {
    await browser.close();
});

export function getPage(): Page { 
    return page 
};