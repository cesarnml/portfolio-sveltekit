import { test, expect } from '@playwright/test';

test('page should have "Hello world" button', async ({ page }) => {
  await page.goto('http://localhost:4173/');
  const target = page.getByText('Hello world');
  await expect(target).toBeDefined()
});