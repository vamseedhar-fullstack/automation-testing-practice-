const {test, expect} = require("@playwright/test");


test("mousehove" ,async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator(".dropbtn").hover();
    await page.locator("//a[normalize-space()='Laptops']").hover();

    await page.waitForTimeout(5000);
})