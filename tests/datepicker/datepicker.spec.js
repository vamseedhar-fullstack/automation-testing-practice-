const {test, expect} = require('@playwright/test');
const { it } = require('node:test');


test("datepicker",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com");

    await page.locator('#datepicker').click();

    const day = 8;
    const month = "October";
    const year = "2025";

    while(true){
        const monthcl = await page.locator('.ui-datepicker-month').textContent();
        const yearcl = await page.locator('.ui-datepicker-year').textContent();

        if(monthcl == month && yearcl == year){
            break
        }

        await page.locator("//a[@title='Next']").click();
    }

    // const items = await page.$$('.ui-state-default');

    // for (let item of items){
    //     const dd = await item.textContent();
    //     if(dd == day){
    //         await item.click();
    //     }
    // }

    await page.locator(`//a[normalize-space()=${day}]`).click()

    await page.waitForTimeout(5000);

    
} )