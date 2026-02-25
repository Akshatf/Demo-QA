class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginbutton = page.locator('#login')
    this.username = page.locator('#userName')
    this.password = page.locator('#password')
    // Logout button path is changing as one is on profile page (demoqa/profile) and another one on books (demoqa/books)
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.logoutButton2 = page.getByRole('button', { name: 'Log out' });
    // this.logoutButton = page.locator("//div[@class='ms-auto text-end col-md-4 col-sm-12']//button[@id='submit']");
    this.loggedUser = page.locator('#userName-value');
    this.bookStoreButtn = page.getByRole('button', { name: 'Go To Book Store' })
  }

  async goToLogin() {
    await this.loginbutton.click();
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbutton.click();
  }

  async goToBookStore() {
    await this.bookStoreButtn.click();
  }
}

module.exports = LoginPage;