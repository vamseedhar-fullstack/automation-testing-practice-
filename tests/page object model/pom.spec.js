import {test, expect} from "@playwright/test";
import login from "./pages/login";
import homepage from "./pages/home";


test("pom" , async ({page}) => {

    const loginnew =   new login(page);
    const produtcoutn = new homepage(page);
    
    await loginnew.gotpage();
    await loginnew.loginToApp("vamsee", "vamsee");


    await page.locator('#logout2').waitFor({ state: 'visible' });

    const count = await produtcoutn.productCount();
    expect(count).toBe(9);

    await page.locator("#logout2").click();
    
})