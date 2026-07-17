
import {test,expect} from "@playwright/test";
import { HomeLoanCalculator } from "../page/ANZLoan/HomeLoan";

test('ANZ Home Loan Calculator', async({page}) => {
    
  const homeloan = new HomeLoanCalculator(page)
  await page.goto(
  'https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/',
  { timeout: 60000, waitUntil: 'domcontentloaded' }  // or 'networkidle'
);
  //await page.goto('https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/');
  //await page.waitForTimeout(60000);
  await homeloan.fillAllfield()
  await page.pause()
  await homeloan.cleardata();
  await page.pause()
  await expect(page.locator('#application_type_single')).toBeChecked(); //to be checked with Surekha
  await expect(page.getByRole('textbox', { name: 'Your annual income (before' })).toHaveValue('0');
  await expect(page.getByRole('textbox', { name: 'Your annual other income' })).toHaveValue('0');
  await expect(page.locator('[id="expenses"]')).toHaveValue('0');
  await expect(page.locator('[id="homeloans"]')).toHaveValue('0');
  await expect(page.locator('[id="otherloans"]')).toHaveValue('0');
  await expect(page.getByRole('textbox', { name: 'Other monthly commitments' })).toHaveValue('0')
  await page.pause()


  



})






    
    

