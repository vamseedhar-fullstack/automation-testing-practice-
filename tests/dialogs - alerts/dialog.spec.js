const {test , expect }= require('@playwright/test');



test.skip('alert with ok' , async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog" , dialog => {

        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("I am an alert box!")
        expect(dialog.accept())
    })

    page.locator("#alertBtn").click();
    
    await page.waitForTimeout(3000);
})


test.skip('alert with conformation' , async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog" , dialog => {

        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!")
        expect(dialog.accept())
    })

    page.locator("#confirmBtn").click();
    await page.waitForTimeout(3000);
})

test('alert with prompt' , async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog" ,async dialog => {

        expect(dialog.type()).toContain("prompt");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        expect(dialog.message()).toContain("Please enter your name:");
        await dialog.accept("vamsee");
    })

    page.locator("#promptBtn").click();
    await page.waitForTimeout(3000);
    expect(page.locator("#demo")).toHaveText("Hello vamsee! How are you today?")
    await page.waitForTimeout(3000);
})