const {test , expect} = require('@playwright/test');
const { url } = require('inspector');


test("table" , async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator('#productTable');

    const tablehead = await table.locator('thead>tr>th');
    console.log(await tablehead.count());

    const tabledata = await table.locator("tbody tr");
    console.log(await tabledata.count());


    // const tablet = tabledata.filter({
    //     has: await page.locator('td'),
    //     hasText: 'Tablet'
    // })

    // await tablet.locator("//input[@type='checkbox']").click();


    await dyamicseletor(tabledata,"td","Tablet");

    await page.waitForTimeout(5000);
})


async function  dyamicseletor(data, locator,text){

        const tablet = data.filter({
        has: await page.locator(locator),
        hasText: text
    })

    await tablet.locator("//input[@type='checkbox']").click();
}