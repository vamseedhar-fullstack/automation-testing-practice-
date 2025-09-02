const { test, expect, chromium} = require("@playwright/test");

test("multiwindows", async () => {

   const browser = await chromium.launch();

   const context = await browser.newContext();

   const page1 = await context.newPage();

   await page1.goto("https://www.worklane.in/");

   const pagepromise  =  context.waitForEvent("page");

   await page1.locator("//div[@class='home-cards-grid']//div[1]//a[1]").click();

   const newpage = await pagepromise;

   await expect(newpage).toHaveTitle("91Springboard Mohan Cooperative Industrial Estate - Shared Workspace In Delh");
});
