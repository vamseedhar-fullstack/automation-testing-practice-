const {test, expect} = require('@playwright/test');

test("homepage", async ({page}) => {
    await page.goto("https://www.altfcoworking.com/");

    const title = await page.title();
    console.log(title);
    
    await expect(page).toHaveTitle("alt.f coworking - Seen on Shark Tank India - Best Shared Office Space")
})