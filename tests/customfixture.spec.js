import { test,expect } from "../page/fixture.js"; 
test('Custom Fixture', async ({loginpage,page}) => {

  await page.goto('https://www.saucedemo.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });

//await loginpage.DataInput(user.username,user.password);
await loginpage.DataInput(process.env.USERNAME1,process.env.PASSWORD1);
});