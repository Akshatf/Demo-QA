import { expect } from "@playwright/test";
class BookStorePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator("#searchBox");
    this.bookRows = page.locator(".rt-tr-group");
  }

  async searchBook(bookName) {
    await this.searchBox.fill(bookName);
  }

  async getBookDetails(bookName) {
    const row = this.page.getByRole("row").filter({ hasText: bookName });

    await expect(row).toBeVisible();

    const cells = row.getByRole("cell");
    const title = await cells.nth(1).textContent();
    const author = await cells.nth(2).textContent();
    const publisher = await cells.nth(3).textContent();

    return { title, author, publisher };
  }
}

module.exports = BookStorePage;
