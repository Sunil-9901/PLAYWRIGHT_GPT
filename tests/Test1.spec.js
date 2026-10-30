// @ts-check
import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('url confirmation', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   await expect(page).toHaveURL('https://playwright.dev/');
// });



// test('Get started link is visible', async({page})=> {

// await page.goto('https://playwright.dev/');
 

// await expect(page.getByRole('link',{name:'Get started'})).toBeVisible();



// });


// test('get click on link ', async({page})=>{

// await page.goto('https://playwright.dev/');
// await page.getByRole('link', {name:'Get started'}).click();
// await expect(page).toHaveURL('https://playwright.dev/docs/intro');



// })


test('Fetch by text', async({page})=>{

await page.goto('https://playwright.dev/');
await expect(page.getByText('enables reliable web automation for testing, scripting, and AI agents.')).toBeVisible();



})