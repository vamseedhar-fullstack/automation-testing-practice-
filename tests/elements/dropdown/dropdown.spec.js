const {test , expect} = require('@playwright/test');
const { flushCompileCache } = require('module');


test("inputelements" , async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//select[@id='country']").selectOption('India');
    await page.locator("//select[@id='country']").selectOption({label : "India"});
    await page.locator("//select[@id='country']").selectOption({value : "India"});
    await page.locator("//select[@id='country']").selectOption({index : 1});
    await page.selectOption("//select[@id='country']", "india");

    // check number of values
    // const noofoptions = page.locator("#country option");
    expect(noofoptions).toHaveCount(10);
    const c = await noofoptions.count();
    console.log(c)



    const noofoptions = page.locator("#country").textContent();
    expect((await noofoptions).includes("India")).toBeTruthy();

    // const options = await page.locator("#country option").allTextContents();
    expect(options).toContain("India");


    // const options = await page.$$("#country option");

    let tf = false

    for(const option of options){
        let values = await option.textContent()
        if(values.includes('India')){
            tf = true
        }
       
    }

    await expect(tf).toBeTruthy();


    const options = await page.$$("#country option");


    for(const option of options){
        let value = await option.textContent()
        if(value.includes('India')){
            await page.selectOption("#country", option)
        }
    }



    await page.waitForTimeout(2000);

})