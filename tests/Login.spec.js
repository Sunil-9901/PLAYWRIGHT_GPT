import { test,expect } from "@playwright/test";

// test('Login start',async({page}) =>{

// await page.goto('https://practice.expandtesting.com/login?utm_source=chatgpt.com');

// await expect(page.getByLabel('username')).toBeVisible();

// await expect(page.getByLabel('password')).toBeVisible();


// await page.getByLabel('Username').fill('practice1')
// await page.getByLabel('Password').fill('SuperSecretPassword!1');
// await page.getByRole('button', {name:'Login'}).click();
// await expect(page.getByText('Your password is invalid!')).toBeVisible();


// await expect(page.getByText('You logged into a secure area!')).toBeVisible();

// await expect(page).toHaveURL('https://practice.expandtesting.com/secure');


// await expect(page.getByLabel('Username')).toHaveValue('practice');






// })


test('todomvc',async({page})=>{


await page.goto('https://demo.playwright.dev/todomvc/#/');

// await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
// await page.getByPlaceholder('What needs to be done?').press('Enter');
// await expect(page.getByText('Buy groceries')).toBeVisible();



// await page.getByText('Buy groceries').hover();
// await page.locator('.destroy').click();
// await expect(page.getByText('Buy groceries')).toBeHidden();


// await page.getByLabel('Toggle Todo').check();

// await expect(page.getByLabel('Toggle Todo')).toBeChecked();




// await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
// await page.getByPlaceholder('What needs to be done?').press('Enter');




// await expect(page.getByText('Buy groceries')).toBeHidden();
// await expect(page.getByText('Learn Playwright')).toBeVisible();


// await page.getByPlaceholder('What needs to be done?').fill('Learn Javascript');
// await page.getByPlaceholder('What needs to be done?').press('Enter');


// await expect(page.locator('.todo-list li')).toHaveCount(3);


// const todoitem=page.locator('.todo-list li')
// .filter({hasText:'Buy groceries'});

//  await todoitem.hover();
// await todoitem.locator('.destroy').click();


// await expect(page.locator('.todo-list li').nth(0))
// .toHaveText('Buy groceries');


// await page.getByPlaceholder('What needs to be done?').fill('Buy groceries for the week.');
// await page.getByPlaceholder('What needs to be done?').press('Enter');


// await expect(page.locator('.todo-list li')).toContainText('groceries');|


await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
await page.getByPlaceholder('What needs to be done?').press('Enter');
await page.getByLabel('Toggle Todo').check();
await expect(page.getByLabel('Toggle Todo')).toBeChecked();
await page.getByLabel('Toggle Todo').uncheck();
await expect(page.getByLabel('Toggle Todo')).not.toBeChecked();


})