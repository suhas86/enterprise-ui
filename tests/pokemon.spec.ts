import { test, expect } from '@playwright/test';

test('it has an input field for searching Pokémon', async ({ page }) => {
  await page.goto('/');
  const input = page.getByRole('textbox', { name: 'Search Pokémon' });
  expect(input).not.toBeNull();
});

test('it should display a list of pokemon on submit', async ({ page }) => {
  await page.goto('/');
  const input = page.getByRole('textbox', { name: 'Search Pokémon' });
  const button = page.getByRole('button', { name: 'Search' });
  await input.fill('pikachu');
  await button.click();
  const list = page.getByRole('list');
  expect(list).not.toBeNull();
  const pikachu = page.getByText('pikachu');
  expect(pikachu).not.toBeNull();
});

test('it should match the screeshot', async ({ page }) => {
  await page.goto('/');
  const input = page.getByRole('textbox', { name: 'Search Pokémon' });
  await input.fill('pikachu');
  const pokemonSearch = page.getByTestId('pokemon-search');
  // maxDiffPixels is the maximum number of different pixels allowed in the screenshot
  // This is useful to avoid flaky tests.
  // On local it generates windows image but on GitHub it generates Linux image.
  // So, the screenshot will be different.
  // So we can either
  // Modify your GitHub Actions to update snapshots in CI: & download verify and commit
  // ignore it in CI
  if (process.env.CI) test.skip();
  await expect(pokemonSearch).toHaveScreenshot({ maxDiffPixels: 100 });
});
