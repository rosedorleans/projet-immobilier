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