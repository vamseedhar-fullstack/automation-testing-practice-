const {test, expect} = require("@playwright/test");

test("builtin_locators", async ({page}) => {

   await page.goto("https://www.altfcoworking.com/enquiry/");

   const altimg =  await page.getByAltText("Coworking Space");

   expect(altimg).toBeVisible();

   await page.getByPlaceholder("text").fill("asdfgh");

   await page.getByPlaceholder("passk").fill("passsword");

   await page.getByRole("button",{type:"submit"}).click();

   const content = await page.locator('//a[@href="/privacy-policy/"]').textContent();

   await expect(await page.getByText(content)).toBeVisible();

})