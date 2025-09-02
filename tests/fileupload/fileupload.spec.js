const {test, expect} = require("@playwright/test");
const path = require("path");


test("doubleclick" ,async ({page}) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    const filebtn = await page.locator('#filesToUpload');

    // single file upload
    // await filebtn.setInputFiles("tests\\fileupload\\FRS.pdf");

    // multiple file upload
    await filebtn.setInputFiles(["tests\\fileupload\\FRS.pdf","tests\\fileupload\\Resume (4).pdf"])
    
    await page.waitForTimeout(5000);
})