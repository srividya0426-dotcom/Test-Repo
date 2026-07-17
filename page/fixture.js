import { test as base } from '@playwright/test';
import { SasDemoLogin } from './SauceDemo/SasdemoLogin';
export const test=base.extend({
    loginpage:async({page},use)=>{
        const loginpage=new SasDemoLogin(page)
        await use(loginpage)
    }
})  //helps to create custom fixture

//export{expect}
export { expect } from '@playwright/test';

