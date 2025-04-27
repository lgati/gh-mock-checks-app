import { test, expect } from '@playwright/test';

test('Simple passing test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
