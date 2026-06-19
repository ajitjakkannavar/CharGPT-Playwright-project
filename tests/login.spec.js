const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../testData/loginData.json');

test.describe('SauceDemo - Ultimate Data-Driven Login Suite', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });



  // Helper function to process assertions based on data conditions
  async function verifyLoginOutcome(page, scenario) {
    if (scenario.expectedResult === 'Login Success') {
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      await expect(loginPage.titleProducts).toHaveText('Products');
    } else {
      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toContainText(scenario.errorMsg);
    }
  }

 

  // Suite 1: Functional & Equivalence Partitioning
  test.describe('Functional Scenarios', () => {
    testData.functionalScenarios.forEach((data) => {
      test(`Functional - ${data.scenario}`, async ({ page }) => {
        await loginPage.login(data.username, data.password);
        await verifyLoginOutcome(page, data);
      });
    });
  });


  //suite1:Functional & equivalence Partitioning 
  test.describe('Functional scenarios',()=>{
    testData.functionalScenarios.forEach((data)=>{
      test(`Functional - ${data.scenario}`, async ({ page }) => {
      await loginPage.login(data.username,data.password)
      await verifyLoginOutcome(page,data)
    })
    })
  })

  // Suite 2: Boundary Value Analysis (BVA)
  test.describe('Boundary Value Scenarios', () => {
    testData.boundaryScenarios.forEach((data) => {
      test(`BVA - ${data.scenario}`, async ({ page }) => {
        await loginPage.login(data.username, data.password);
        await verifyLoginOutcome(page, data);
      });
    });
  });

  // Suite 3: Security & Injection Vulnerabilities
  test.describe('Security & Injection Scenarios', () => {
    testData.securityScenarios.forEach((data) => {
      test(`Security - ${data.scenario}`, async ({ page }) => {
        await loginPage.login(data.username, data.password);
        await verifyLoginOutcome(page, data);
      });
    });
  });
});