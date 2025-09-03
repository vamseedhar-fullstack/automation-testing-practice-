const {test, expect, chromium} = require("@playwright/test");


// to test allure then uncomment the 
//  [
//    "allure-playwright",
//   { outputFolder: "allure-results", detail: true, suiteTitle: false },
//  ], from config.js

// then run these commands 
// npm run allure:report
// npm run allure:open
// npm run allure:serve


test("test1" ,async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.npmjs.com/package/allure-playwright");
    await expect(page).toHaveTitle("allure-playwright - npm");
})

test("test2",async ({page}) => {
    await page.goto("https://www.worklane.in/");
    await expect(page).toHaveURL("https://www.worklane.in/")
})

test("test3",async ({page}) => {
    await page.goto("https://www.worklane.in/coworking-space");
    await expect(page).toHaveURL("https://www.worklane.in/coworking-space")
})



