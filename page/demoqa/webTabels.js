// @ts-check
/** @typedef {import('@playwright/test').Page} Page */
import { test, expect } from '@playwright/test';
export class WebTabels{
    constructor(page){
        this.page=page;
        this.addrecordbutton=page.locator('[id="addNewRecordButton"]')
        this.fname=page.locator('[id="firstName"]')
        this.lname=page.locator('[id="lastName"]')
        this.email=page.locator('[id="userEmail-wrapper"]')
        this.age=page.locator('[id="age"]')
        this.salary=page.locator('[id="salary"]')
        this.dept=page.locator('[id="department"]')
        this.submitbutton=page.locator('[id="submit"]')

        this.search=page.getByRole('textbox', { name: 'Type to search' })
        this.magnify=page.locator('[id="basic-addon2"]') //got by pick locator
   
    }
        //await page.getByText('label')

        

        async AddWebElementAction (fn,ln,emailaddr,age,salary,department){
            await this.addrecordbutton.click();
            await this.fname.fill(fn);
            await this.lname.fill(ln);
            await this.email.fill(emailaddr);
            await this.age.fill(age);
            await this.salary.fill(salary);
            await this.dept.fill(department);
            await this.submitbutton.click()          

        }

        // aysnc searchwebElement(){
        //     await this.search.click()
        //     await this.search.getValue()
        //     await this.magnify.click()
        // }

    }


