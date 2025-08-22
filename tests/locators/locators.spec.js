import {test, expect} from "@playwright/test";

test("locators",async ({page})=>{

    await page.goto("https://www.altfcoworking.com/");

    // await page.locator("element").click();

    await page.click("//button[normalize-space()='Enquire']");

    // await page.locator("//input[@name='fullName']").fill("vamsee");
    // await page.type('xpath=//input[@name="fullName"]', 'vamsee');

    await page.fill("//input[@name='fullName']", "vamsee");

    const emailfinder = await page.locator("//input[@name='mobile']")

    await expect(emailfinder).toBeVisible();

    await page.close();    
})