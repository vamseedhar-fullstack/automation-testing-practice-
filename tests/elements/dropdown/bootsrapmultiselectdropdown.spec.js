const {test , expect }= require('@playwright/test');
const { it } = require('node:test');


test('multiselect' , async({page}) => {

    await page.goto("https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*17yfgnx*_ga*MTI4NjE5NjYyNS4xNzU2MDE2NzU0*_ga_SEKJ4E9T4H*czE3NTYwMTY3NTQkbzEkZzAkdDE3NTYwMTY3NTQkajYwJGwwJGgw");

    const item = await page.locator(".multiselect").click();

    // const item2 = await page.locator('.multiselect-container li>a>label');
    // await expect(item2).toHaveCount(7);

    const items3 = await page.$$('.multiselect-container li>a>label');
    // await expect(items3.length).toBe(7)

    for(const items of items3){
        const text = await items.textContent();

        if(text.includes("PHP") || text.includes("JavaScript")){
            await items.click();   
        }
    }

    await page.waitForTimeout(3000);
})