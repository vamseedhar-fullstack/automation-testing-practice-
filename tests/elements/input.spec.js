const {test , expect} = require('@playwright/test');


test("inputelements" , async ({page}) => {

        page.goto("https://www.altfcoworking.com/enquiry/");

        await expect(await page.locator('//input[@name="fullName"]')).toBeVisible();
        await expect(await page.locator('//input[@name="fullName"]')).toBeEditable();
        await expect(await page.locator('//input[@name="fullName"]')).toBeEmpty();
        await expect(await page.locator('//input[@name="fullName"]')).toBeEnabled();

        await page.locator('//input[@name="fullName"]').fill('vamsee');

        await page.waitForTimeout(5000);

})