import { test, expect } from "@playwright/test";

test("Example test index", async ({ page }) => {
  await page.goto("localhost:3000/");
  const text = await page.textContent("h1");
  expect(text).toBe("Bienvenue sur notre site de vente de maison");
});

test("Check form contact", async ({ page }) => {
  await page.goto("localhost:3000/contact");
  const formExists = await page.$('form') !== null;
  expect(formExists).toBeTruthy();
});

test("Check image in Posts page", async ({ page }) => {
  await page.goto("localhost:3000/posts");
  const postExist = await page.$('img') !== null;
  expect(postExist).toBeTruthy();
});


test("Check form search posts", async ({ page }) => {
  await page.goto("localhost:3000/posts");
  const formExists = await page.$("form") !== null;
  expect(formExists).toBeTruthy();
  const initialUrl = page.url();
  await page.click("form button[type='submit']");
  await page.waitForLoadState('networkidle');
  const currentUrl = page.url();
  expect(currentUrl).not.toEqual(initialUrl);
});