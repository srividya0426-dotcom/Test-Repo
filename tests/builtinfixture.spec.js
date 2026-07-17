import {test,expect} from '@playwright/test'
import { Utils } from '../page/utils';
import { only } from 'node:test';

test ('Browser Fixtur', async({browser})=>{
const myContext = await browser.newContext()
const myPage = await myContext.newPage()
const utils = new Utils(myPage);
await utils.launchurl("https://demoqa.com/alerts")

})

test.only('Context Fixtur', async({context})=>{
const myPage = await context.newPage()
const utils = new Utils(myPage);
await utils.launchurl("https://demoqa.com/alerts")

})