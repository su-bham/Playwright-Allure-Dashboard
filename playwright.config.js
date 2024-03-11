// playwright.config.js
const { devices } = require('@playwright/test');
module.exports = {
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [['list'], ['allure-playwright']],
};
