import { test, expect } from '@playwright/test';

test('page should have "Hello world" button', async ({ page }) => {
  await page.goto('http://localhost:4173/');
  expect(page.getByText("Hello world")).toContainText('Hello world')
  expect(page.getByText("Hello world")).toHaveClass('btn')
});