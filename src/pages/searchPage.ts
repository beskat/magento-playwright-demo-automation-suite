import { getPage } from "../hooks/baseHook";
import { expect } from "@playwright/test";

export class SearchPage {
  readonly searchResultsTitle = getPage().locator('h1.page-title');


  async verifySearchResultsTitle(expectedTitle: string) {
    await expect(this.searchResultsTitle).toHaveText(expectedTitle);
  }
}
