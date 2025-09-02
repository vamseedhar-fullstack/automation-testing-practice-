const {test, expect} = require('@playwright/test');

// npx playwright test tags.spec.js --project=chromium --headed --grep "@reg"
// npx playwright test tags.spec.js --project=chromium --headed --grep "@sanity"
// npx playwright test tags.spec.js --project=chromium --headed --grep "@sanity@reg"


test("test1@sanity", async() => {
    console.log("test 1")
});

test("test2@reg", async() => {
    console.log("test 2")
});

test("test3@sanity", async() => {
    console.log("test 3")
});

test("test4@reg", async() => {
    console.log("test 4")
});

test("test5@sanity", async() => {
    console.log("test 5")
});

test("test6@sanity@reg", async() => {
    console.log("test 6")
});

