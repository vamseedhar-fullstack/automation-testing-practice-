const {test , expect} = require('@playwright/test');


test("inputelements" , async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const iframesCount = await page.frames();

    console.log(iframesCount.length);

    const singleframe = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

    await singleframe.locator('input[name="mytext1"]').fill("vamsee")

    // const frame = await page.frameLocator('frame[src="frame_1.html"]').locator('input[name="mytext1"]');

    // frame.fill("vamsee");

    await page.waitForTimeout(5000);

})