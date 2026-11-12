import{test,expect} from '@playwright/test';

// test('Select Dropdown', async ({page}) =>{


// await page.goto('https://the-internet.herokuapp.com/dropdown');
// await page.locator('#dropdown').selectOption('1');

// await page.locator('#dropdown').selectOption({ label: 'Option 2'});
// await expect(page.locator('#dropdown')).toHaveValue('2');




// })

// test('Select Impressive radio button', async({page})=>{

// await page.goto('https://demoqa.com/radio-button');

// await page.getByLabel('Impressive').check();
// await expect(page.getByLabel('Impressive')).toBeChecked();
// await expect(page.getByText('You have selected Impressive.')).toBeVisible();


// })

test('Check Javascript alerts',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/javascript_alerts');


// Below Code regarding to cancel

// page.once('dialog', dialog => dialog.dismiss());

// await page.getByRole('button',{name:'Click for JS Confirm'}).click();

// await expect(page.getByText('You clicked: Cancel')).toBeVisible();







// Below code regarding to accpet 

// page.once('dialog', dialog => dialog.accept());

// await page.getByRole('button',{name:'Click for JS Alert'}).click();
// await expect(page.getByText('You successfully clicked an alert')).toBeVisible();




page.once('dialog', dialog => dialog.accept('Playwright'));

await page.getByRole('button',{name:'Click for JS Prompt'}).click();
await expect(page.getByText('You entered: Playwright')).toBeVisible();






})