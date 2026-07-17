export class AddingtoCart{
constructor(page){
    this.page=page;


    

    // // Products
     //this.item1AddBtn   = page.locator('#add-to-cart-sauce-labs-backpack');
    // this.item2AddBtn   = page.locator('#add-to-cart-sauce-labs-bike-light');
    // this.item3AddBtn   = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');

    //   //Adding items to cart



}
 async addtocart(nameoftheproduct){

    const products = await this.page.locator(".inventory_item_name"); //products has all the products available
  const productcount = await products.count()
   console.log(productcount)

   for(let i=0 ; i< productcount;i++){
    const item = products.nth(i).textContent()

    if (item==nameoftheproduct){
 await this.page.locator('[class="inventory_item"]').nth(i).locator('[id^="add-to-cart"]').click()

    }
        

 }
  


}
    
        