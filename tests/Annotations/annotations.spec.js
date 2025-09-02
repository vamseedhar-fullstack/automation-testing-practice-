import { test, expect } from '@playwright/test';

// Runs only this test
test.only('Only: This test will run exclusively', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

// Skip this test
test.skip('Skip: This test will not run', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Example Domain');
});

// Mark test as expected to fail
test.fail('Fail: This test is expected to fail', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Wrong Title'); // This will fail
});

// Mark test as fixme (to be fixed later)
test.fixme('Fixme: Known issue, test will be skipped', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Example Domain');
});

// Mark test as slow (for longer execution time)
test('Slow: This test runs with more timeout', async ({ page }) => {
  test.slow(); // Increases timeout automatically
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Example Domain');
});
