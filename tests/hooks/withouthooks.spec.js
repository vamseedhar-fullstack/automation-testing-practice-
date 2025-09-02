const {test, expect} = require("@playwright/test");


test("countproducts", async ({page}) => {

    await page.goto("https://www.demoblaze.com/index.html");

    await page.locator("#login2").click();
    await page.locator('#loginusername').fill("vamsee");
    await page.locator('#loginpassword').fill("vamsee");
    await page.locator("//button[normalize-space()='Log in']").click();

    await page.waitForTimeout(3000);
    const items = await page.$$('#tbodyid h4 a');

    expect(items).toHaveLength(9);

    await page.locator("#logout2").click();

});


test.only("addtocart" , async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");

    await page.locator("#login2").click();
    await page.locator('#loginusername').fill("vamsee");
    await page.locator('#loginpassword').fill("vamsee");
    await page.locator("//button[normalize-space()='Log in']").click();


    await page.waitForSelector('#tbodyid h4 a');


    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    await page.on("dialog", async dialog =>{
        expect(await dialog.message()).toBe("Product added.");
    })

    await page.locator("#logout2").click();

})

