// tests/homepage.test.js
const { test, expect } = require('@playwright/test');

test('Google homepage has correct title', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
