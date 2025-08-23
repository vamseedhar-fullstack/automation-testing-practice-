import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.altfcoworking.com/');
  await page.getByRole('button', { name: 'Request a Callback' }).nth(3).click();
  await page.locator('input[name="fullName"]').click();
  await page.locator('input[name="fullName"]').fill('ughkuihuh');
  await page.locator('input[name="mobile"]').click();
  await page.locator('input[name="mobile"]').fill('oiuhoih');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('oho');
  await page.locator('#new-cards-section').getByText('Coworking Space', { exact: true }).click();
  await page.getByRole('radio', { name: 'Coworking Space' }).press('i');
  await page.getByRole('radio', { name: 'Coworking Space' }).press('h');
  await page.getByRole('radio', { name: 'Coworking Space' }).press('o');
  await page.getByRole('button', { name: '×' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '15 Days rent-free Sector 68,' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Enquire now' }).click();
  await page1.locator('input[name="fullName"]').click();
  await page1.locator('input[name="fullName"]').fill('iugyiugugh');
  await page1.locator('input[name="mobile"]').click();
  await page1.locator('input[name="mobile"]').fill('iughiug');
  await page1.locator('input[name="email"]').click();
  await page1.locator('input[name="email"]').fill('iug');
  await page1.getByRole('button', { name: '×' }).click();
});