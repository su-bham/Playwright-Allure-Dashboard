// tests/search.test.js
const { test, expect } = require('@playwright/test');

test('search on Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  // Note: Google's search input can be identified by the names 'q'
  await page.fill('input[name="q"]', 'Playwright');
  // Google search can be initiated by pressing "Enter" in the search box
  await page.keyboard.press('Enter');
  await page.waitForNavigation();
  await expect(page).toHaveURL(/search/);
  await expect(page).toContainText('Playwright');
});
