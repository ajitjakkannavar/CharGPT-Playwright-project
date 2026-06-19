class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      
      // Selectors optimized to match the script's assertion design
      this.usernameInput = page.locator('[data-test="username"]');
      this.passwordInput = page.locator('[data-test="password"]');
      this.loginButton = page.locator('[data-test="login-button"]');
      this.errorMessage = page.locator('[data-test="error"]');
      this.titleProducts = page.locator('.title'); 
    }
  
    async navigate() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = { LoginPage };