import {test,expect} from '@playwright/test'
import { BibaDress } from '../page/Biba' //original page
import { Utils } from '../page/utils'
import { Girldress } from '../page/bibaGirldresstab' //new tab

test('Biba Shopping', async({page}) => {

    const bibadress = new BibaDress(page) 
    const utils =new Utils(page)

    await utils.launchurl("https://www.biba.in/au/girls/")

    const page2= await bibadress.getproduct(0)
    const page3= await bibadress.getproduct(1)
    const page4= await bibadress.getproduct(2)
    const girldress = new Girldress(page2)
    const girldress1 = new Girldress(page3)
    const girldress2 = new Girldress(page4)
    await page.pause()
    await girldress.selectsize()
    await girldress.addtocart()

    await girldress.totalcart()

    await page.pause()



    




})

// const bibadress = new BibaDress(page) 
//     const utils =new Utils(page)

//     await utils.launchurl("https://www.biba.in/au/girls/")
//     const page2= await bibadress.getproduct(0)
//     const girldress =await new Girldress(page2)
//     await girldress.selectsize()
//     await girldress.addtocart()
//     await expect()


//     // const page3 = await bibadress.getproduct(1)
//     // const girldress =await new Girldress(page3)
//     // await girldress.selectsize()
//     //  await girldress.addtocart()
//     //  await expect()

    
//     let cartcount=0

//     for(let i=0; i<3; i++){

//     const productPage=await bibadress.getproduct(i)
    
//     const girldress=new Girldress(productPage)
//      await girldress.selectsize()
//      await girldress.addtocart()

//      cartCount++

//         await expect(girldress.cartCount).toHaveText(String(cartCount))

//         await productPage.close()


//     }

    //await girldress.totalcart()

   

