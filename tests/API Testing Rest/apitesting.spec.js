// apitesting.spec.js
const { test, expect } = require('@playwright/test');

// GET posts
test("Get posts", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

// POST create post
test("Create post", async ({ request }) => {
  const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
    data: { title: "foo", body: "bar", userId: 1 },
    headers: { "Accept": "application/json" }
  });
  console.log(await response.json());
  expect(response.status()).toBe(201);
});

// PUT update post
test("Update post", async ({ request }) => {
  const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
    data: { id: 1, title: "updated title", body: "updated body", userId: 1 },
    headers: { "Accept": "application/json" }
  });
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

// DELETE post
test("Delete post", async ({ request }) => {
  const response = await request.delete("https://jsonplaceholder.typicode.com/posts/1");
  console.log(await response.text()); // usually {}
  expect(response.status()).toBe(200);
});
