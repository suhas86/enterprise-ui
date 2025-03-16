import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox', { name: 'Search Pokémon' }).click();
  await page.getByRole('textbox', { name: 'Search Pokémon' }).fill('pi');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('vulpix').click();
  await page.getByText('caterpie').click();
  await page.getByRole('textbox', { name: 'Search Pokémon' }).click();
  await page.getByRole('textbox', { name: 'Search Pokémon' }).fill('');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#root').click();
});
