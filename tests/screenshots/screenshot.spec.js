const {test, expect} = require('@playwright/test');
const path = require('path');

test("screenshot-fullscreen", async({page}) => {
    await page.goto("https://www.altfcoworking.com/");

    // await page.screenshot({path:'tests/screenshots'+Date.now()+'herosection.png'});
    await page.waitForTimeout(5000);
   const filepath = path.join("tests" , "screenshots", Date.now() + "newpic.png");
   await page.screenshot({path:filepath});
})


test("fullpagescreenshot",  async({page}) => {
    await page.goto("https://myhq.in/");

    const filepath = path.join("tests","screenshots", Date.now() + "fullscreen.png");
    await page.screenshot({path:filepath,fullPage:true});
})

test.only("partial screenshot",async ({page}) => {
    await page.goto("https://myhq.in/new-delhi");

    const filepath =  path.join("tests", "screenshots" , Date.now() + "partial.png" );
    await page.locator("//div[@class='d-flx flx-d-clm width-100 search-header-container']").screenshot({path:filepath});
})
