const {test, expect} = require("@playwright/test");


test("doubleclick" ,async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const name = await page.locator("#name").fill("vamsee");
    // const email = await page.locator("#email");

    await page.keyboard.press('Control+a');
    await page.keyboard.press('Control+c');

    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    await page.keyboard.press("Control+v");

    await page.waitForTimeout(5000);
})