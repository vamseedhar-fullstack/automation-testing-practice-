const { test, expect } = require("@playwright/test");

test.beforeAll("before all", () => {
    console.log("this before all");
});

test.afterAll("after all", () =>{
    console.log("this is after all");
});

test.beforeEach("before each", () => {
    console.log("this is before each")
});

test.afterEach("after each", () => {
    console.log("this is after each")
});

test.describe("describe 1", () => {
  test("group 1", () => {
    console.log("this group 1");
  });

  test("group 2", () => {
    console.log("this group 2");
  });
});

test.describe("describe 2", () => {
  test("group 3", () => {
    console.log("this group 3");
  });

  test("group 4", () => {
    console.log("this group 4");
  });
});
