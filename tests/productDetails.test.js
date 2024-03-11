// tests/searchResults.test.js
const { test, expect } = require('@playwright/test');

test('Google search results contain Playwright GitHub', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('input[name="q"]', 'Playwright GitHub');
  await page.keyboard.press('Enter');
  await page.waitForNavigation();
  // This checks that the search results contain the expected text.
  // Note: The exact selector may need to be updated based on Google's layout changes.
  await expect(page).toContainText('playwright.dev');
});
