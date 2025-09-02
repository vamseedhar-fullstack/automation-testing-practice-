const {test, expect} = require("@playwright/test");


test("doubleclick" ,async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const source = await page.locator("#draggable");
    const target = await page.locator('#droppable');

    // approch1
    // await source.hover();
    // await page.mouse.down();

    // await target.hover();
    // await page.mouse.up();


    // approch 2

    await source.dragTo(target);
    
    await page.waitForTimeout(5000);
})