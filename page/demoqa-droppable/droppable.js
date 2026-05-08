export class droppable{
    constructor (page){
        this.page=page
        this.simpLe=page.locator('[id="droppableExample-tab-simple"]')
        this.dragme=page.getByLabel('Simple').getByText('Drag Me')
        this.dropme=page.locator('[id="droppable"]')

       // await page.getByTitle('Drag Me')
        this.ACCEPT=page.locator('[id="droppableExample-tab-accept"]')
        this.acceptable=page.locator('[id="acceptable"]')
        this.notacceptable=page.getByText('Not Acceptable')
        this.drophere=page.getByLabel('Accept').locator('div').filter({ hasText: /^Drop here$/ })
        
        this.preventpropogation=page.locator('[id="droppableExample-tab-preventPropogation"]')
        this.dragme1=page.locator('[id="dragBox"]')
        this.outerdropnotgreedy=page.locator('[id="notGreedyInnerDropBox"]')
        this.innerdropnotgreedy=page.locator('[id="notGreedyInnerDropBox"]')
        this.outerdropgreedy=page.locator('[id="greedyDropBoxInner"]')
        this.innerdropgreedy=page.locator('[id="greedyDropBoxInner"]')

        this.revertdrag=page.locator('[id="droppableExample-tab-revertable"]')
        this.willrevert=page.locator('[id="revertable"]')
        this.nonrevert=page.locator('[id="notRevertable"]')
        this.drophere2=page.locator('id="droppable"]')










    }
}