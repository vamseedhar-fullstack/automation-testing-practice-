const {test, expect} = require("@playwright/test");


test("rightclick" ,async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator(".post-title.entry-title").click({button:"right"});

    await page.waitForTimeout(5000);
})