const { test } = require('@playwright/test');


test("multiselector", async({page}) => {
    await page.goto("https://www.altfcoworking.com/");

    await page.click('//button[normalize-space()="Gurgaon"]');

    await page.waitForSelector('//button[normalize-space()="Gurgaon"]')

    const allcardtitle = await page.$$('//div[@class="branch-card-item"]//h4');

    const firstCard = allcardtitle[0];

    const outer = await firstCard.evaluate((el) => el.outerHTML)
    console.log("outer", outer);

    console.log(await firstCard.textContent());


    for (const card of allcardtitle){
        console.log(await card.textContent());
    }
})
