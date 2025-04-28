import { test, expect } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";

test('Simple failing test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Not the correct title/);
});

test('Simple failing test 2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await page.mouse.move(0, 100);
  await argosScreenshot(page, "homepage");
});