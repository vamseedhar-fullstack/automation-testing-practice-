const {test , expect} = require('@playwright/test');
const { url } = require('inspector');


test("inputelements" , async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const iframesCount = await page.frames();

    console.log(iframesCount.length);

    const singleframe = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

    await singleframe.locator('input[name="mytext3"]').fill("vamsee");

    const childframe = await singleframe.childFrames();

    childframe[0].locator('//*[@id="mG61Hd"]/div[2]/div[1]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/label').click();

    await page.waitForTimeout(5000);
})