const {test , expect} = require('@playwright/test');


test("inputelements" , async ({page}) => {

       await page.goto("https://testautomationpractice.blogspot.com/");

       await page.locator("//input[@id='sunday']").check();

       await expect(await page.locator("//input[@id='sunday']")).toBeChecked();

       await expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();

       await expect(await page.locator("//input[@id='wednesday']").isChecked()).toBeFalsy();

       const items = [
        "//input[@id='monday']",
        "//input[@id='thursday']",
        "//input[@id='saturday']"
       ]

       for (let item of items){
             await page.locator(item).check();
       }


       await page.waitForTimeout(5000);

       for (let item of items){
        await page.locator(item).uncheck()
       }
       
       await page.waitForTimeout(5000);

})