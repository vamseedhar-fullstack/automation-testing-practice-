const {test, expect} = require("@playwright/test");


test("doubleclick" ,async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//button[normalize-space()='Copy Text']").dblclick();
    
    await page.waitForTimeout(5000);
})