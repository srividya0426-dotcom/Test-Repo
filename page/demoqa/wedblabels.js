// @ts-check
/** @typedef {import('@playwright/test').Page} Page */
import { test, expect } from '@playwright/test';
export class weblabels{
    constructor(page){
        this.page=page
        this.addrecord=page.locator('[id="addNewRecordButton"]')
        this.fname=page.locator('[id="firstName"]')
        this.lname=page.locator('[id="lastName"]')
        this.email=page.locator('[id="userEmail-wrapper"]')
        this.age=page.locator('[id="age"]')
        this.salary=page.locator('[id="salary"]')
        this.dept=page.locator('[id="department"]')
        this.submit=page.locator('[id="submit"]')
        this.search1=page.locator('[id="searchBox"]')
        this.magnify=page.locator('[id="basic-addon2"]')
   
        this.search1=page.getBy
        //await page.getByText('label')

        )


    }
{

}}