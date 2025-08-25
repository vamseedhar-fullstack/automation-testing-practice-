const {test , expect }= require('@playwright/test');
const { it } = require('node:test');


test('multiselect' , async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@placeholder='Username']").fill("Admin");

    await page.locator("//input[@placeholder='Password']").fill("admin123");

    await page.locator("//button[normalize-space()='Login']").click();

    await page.locator("//span[normalize-space()='PIM']").click();

    await page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click();

    await page.waitForTimeout(3000);

    
    const items = await page.$$(".oxd-select-option>span");

    for( let item of items){
        let  text = await item.textContent();

        if(text.includes("QA Engineer")){
            await item.click();
            break;
        }
    }



 


    await page.waitForTimeout(5000);
})