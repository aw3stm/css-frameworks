import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';

test.describe('auth flow', () => {
  test('toggle between login and register forms', async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    await expect(page.locator('#login-section')).toBeVisible();
    await expect(page.locator('#register-section')).toBeHidden();

    await page.locator('#show-register-btn').click();

    await expect(page.locator('#register-section')).toBeVisible();
    await expect(page.locator('#login-section')).toBeHidden();

    await page.locator('#show-login-btn').click();

    await expect(page.locator('#login-section')).toBeVisible();
  });
});
