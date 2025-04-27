import { test, expect } from '@playwright/test';

test('Simple failing test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Not the correct title/);
});