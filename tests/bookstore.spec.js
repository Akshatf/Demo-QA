const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const BookStorePage = require('../pages/bookstorePage');
const writeFile = require('../utils/fileUtil');

test('UI Assignment', async ({ page }) => {

  // go on the webpage
  await page.goto('https://demoqa.com/');

  // click on Book Store Application
  await page.click('text=Book Store Application');

  //Login
  const loginPage = new LoginPage(page);
  await loginPage.goToLogin();

  //credentials
  await loginPage.login('Akshat', 'Akshat@123');

  // Validate username & logout button after scceussful login
  await expect(loginPage.loggedUser).toBeVisible();
  await expect(loginPage.logoutButton).toBeVisible();

  // Navigate to Book Store page after login
  await loginPage.goToBookStore();

  // Search book
  const bookstore = new BookStorePage(page);
  // name of book to be searched
  const bookName = "Learning JavaScript Design Patterns";

  // waiting to load
  await bookstore.searchBook(bookName);

  // storing book details 
  const bookDetails = await bookstore.getBookDetails(bookName);

  //asseration to check if the searched book is correct or not
  expect(bookDetails.title).toContain(bookName);

  // details of the book are stored in a text file
  writeFile(bookDetails);

  // Logout
  await loginPage.logoutButton2.click();
});