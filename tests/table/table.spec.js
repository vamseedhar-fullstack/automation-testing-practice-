const { test, expect } = require("@playwright/test");

test("table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  const tablehead = await table.locator("thead>tr>th");
  console.log(await tablehead.count());

  const tabledata = await table.locator("tbody tr");
  console.log(await tabledata.count());

  // const tablet = tabledata.filter({
  //     has: await page.locator('td'),
  //     hasText: 'Tablet'
  // })

  // await tablet.locator("//input[@type='checkbox']").click();

  await page.waitForSelector("table");

  // await dyamicseletor(page,tabledata,"td","Tablet");
  // await dyamicseletor(page,tabledata,"td","Smartwatch");
  // await dyamicseletor(page,tabledata,"td","Laptop");

//   const pagenation = await page.locator('#pagination');
//   const pageli = await pagenation.locator("li a");

//   for(let p=0; p<await pageli.count(); p++ ){

//       for(let i=0; i<await tabledata.count(); i++){
//       let row = tabledata.nth(i);
//       let tds = await row.locator('td');

//       for(let c=0; c< await tds.count(); c++){
//           let text =await tds.nth(c).textContent();
//           console.log(text)
//       }
//   }
//       await pageli.nth(p).click()
//   }

  const pagenation = await page.locator("#pagination");
  const pageli = await pagenation.locator("li a");

  for (let p = 0; p < (await pageli.count()); p++) {
    if (p>0){
         await pageli.nth(p).click()
    }
    for (let i = 0; i < (await tabledata.count()); i++) {
      let singlerow = tabledata.nth(i);
      let tds = await singlerow.locator("td");

      for (let c = 0; c < (await tds.count()); c++) {
        let finaltext = await tds.nth(c).textContent();
        console.log(finaltext);
      }
    }
    
  }

  await page.waitForTimeout(1000);
});

async function dyamicseletor(page, data, locator, text) {
  const tablet = data.filter({
    has: await page.locator(locator),
    hasText: text,
  });
  await tablet.locator("//input[@type='checkbox']").click();
}
