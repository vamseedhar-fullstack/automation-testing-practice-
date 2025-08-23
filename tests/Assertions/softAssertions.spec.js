const {test , expect} = require("@playwright/test");

test('softassesrions' , async({page}) => {

    await page.goto("https://www.altfcoworking.com/");

    await expect(page).toHaveTitle("alt.f coworking - Seen on Shark Tank India - Best Shared Office Space");
    
    await expect(page).toHaveURL("https://www.altfcoworking.com/");

    await expect.soft(page).toHaveTitle("alt.f coworkig - Seen on Shark Tank India - Best Shared Office Space");
    
    await expect.soft(page).toHaveURL("https://www.altfcoworking.com/");

})