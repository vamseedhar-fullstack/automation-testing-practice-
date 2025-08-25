const {test , expect }= require('@playwright/test');
const { it } = require('node:test');


test('multiselect' , async({page}) => {

    await page.goto("https://www.redbus.in/");

    await page.click("div[class='inputAndSwapWrapper___625fe3'] div[class='label___d74dcc ']");

    await page.locator("#srcDest").fill("vinjamur");

    // await page.locator("//div[contains(text(),'Vinjamur (andhra pradesh)')]").click();

    await page.waitForSelector(".listHeader___19289f")

    await page.waitForTimeout(3000);

    const items = await page.$$(".listHeader___19289f");

    for(const item of items){
        const text = await item.textContent()

       if(text.includes("Vinjamur (andhra pradesh)")){
        console.log(text)
        await item.click();
        break;

       }
    }



    // for(const items of items3){
    //     const text = await items.textContent();

    //     if(text.includes("PHP") || text.includes("JavaScript")){
    //         await items.click();   
    //     }
    // }

    await page.waitForTimeout(3000);
})