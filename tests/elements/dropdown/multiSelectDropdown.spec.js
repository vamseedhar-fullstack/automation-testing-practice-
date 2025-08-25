const {test , expect }= require('@playwright/test');


test('multiselect' , async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.selectOption('#colors', ['red', "green", 'yellow']);

    // 1. check options count in dropdown
    const item2 = await page.locator('#colors option');
    await expect(item2).toHaveCount(7);
    
    // 2.check number of options in dd using js array
    const items = await page.$$('#colors option'); 
    await expect(items.length).toBe(7);
    
    // 3.check precence of value
    const itmes3 = await page.locator('#colors').textContent();
    await expect(itmes3).toContain('Red');
    await expect(itmes3.includes('Red')).toBeTruthy();

    await page.waitForTimeout(3000);
})