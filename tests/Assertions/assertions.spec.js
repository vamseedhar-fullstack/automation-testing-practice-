const {test, expect}  = require("@playwright/test");

test("Assertions" , async ({page}) => {

    await page.goto("https://www.altfcoworking.com/");

    await expect(page).toHaveURL("https://www.altfcoworking.com/");

    await expect(page).toHaveTitle("alt.f coworking - Seen on Shark Tank India - Best Shared Office Space");

    const altimg = await page.locator('//div[contains(@class,"header__logo")]//a');

    await expect(altimg).toBeVisible();

    const btnenable = await page.locator('//button[normalize-space()="Explore Workspaces"]');

    await expect(btnenable).toBeEnabled();

    // await expect(btnenable).toBeDisabled();

    await page.goto("https://www.altfcoworking.com/enquiry/");

    const checkradio = await page.locator('//input[@value="Shared Space"]');

    await checkradio.click();

    await expect(checkradio).toBeChecked();

    const checkchekbox = await page.locator('//input[@name="receiveUpdates"]');

    await checkchekbox.click();

    await expect(checkchekbox).toBeChecked();

    const btntype = await page.locator('//button[@class="submit-button"]');

    await expect(btntype).toHaveAttribute("type" , "submit");

    const Submitanenquiry = await page.locator('//h2[normalize-space()="Submit an enquiry"]');

    await expect(await page.locator('//h2[normalize-space()="Submit an enquiry"]')).toHaveText("Submit an enquiry");

    await expect(Submitanenquiry).toContainText("enquiry");

   const firstname = await page.locator('//input[@name="fullName"]');

   await firstname.fill("vamsee")


    await expect(firstname).toHaveValue("vamsee");

    const dropdowncount = await page.locator('.input');

    await expect(dropdowncount).toHaveCount(4)


    // we can use not also
    // await expect(altimg).not.toBeVisible();

})