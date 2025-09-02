const {test, expect} = require("@playwright/test");


let page;

test.beforeAll("before all", async ({browser}) =>{
    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("#login2").click();
    await page.locator('#loginusername').fill("vamsee");
    await page.locator('#loginpassword').fill("vamsee");
    await page.locator("//button[normalize-space()='Log in']").click();
})

test.afterAll("afterall", async () => {
        await page.locator("#logout2").click();
})


test("countproducts", async () => {
   
    await page.waitForTimeout(3000);
    const items = await page.$$('#tbodyid h4 a');

    expect(items).toHaveLength(9);


});


test.only("addtocart" , async () => {
   await page.waitForSelector('#tbodyid h4 a');
      await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  
      const dialogPromise = page.waitForEvent("dialog");
  
      await page.locator("//a[normalize-space()='Add to cart']").click();
  
      const dialog = await dialogPromise;
      await expect(dialog.message()).toBe("Product added.");
      await dialog.accept();

})

