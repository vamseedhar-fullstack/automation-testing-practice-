const {test , expect} = require('@playwright/test');


test("radiobtn elements" , async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="male"]').check();

    await expect(await page.locator('//input[@id="male"]')).toBeChecked();
    await expect(await page.locator('//input[@id="male"]').isChecked()).

})