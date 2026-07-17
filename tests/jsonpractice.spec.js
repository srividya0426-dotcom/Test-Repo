import { test, expect } from "@playwright/test";
import { SasDemoLogin } from "../page/SauceDemo/SasdemoLogin";

const users= require("../testdata/testdata.json")

const role = process.env.ROLE || "standard_user";
// Default = all users
let filteredUsers = users;
// Filter based on username
if (role !== "all") {
const usernames = role
 .split(",")
 .map(r => r.trim());
filteredUsers = users.filter(
 (user) =>
usernames.includes(user.username)
 );
}


for ( const user of filteredUsers){
    test(`testdata json practice ${user.username}` , async ({ page }) => {
  await page.goto('https://www.saucedemo.com/', { timeout: 60000, waitUntil: 'domcontentloaded' });
  const login = new SasDemoLogin(page);
  await login.DataInput(user.username,user.password);
  await page.pause();

   

});
}