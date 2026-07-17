export class Droppable{
    constructor(page){
        this.page=page;
        this.dragme=page.locator('[id="draggable"]');
        this.dropme=page.locator('[id="simpleDropContainer"] [id="droppable"]')

    }
    async drgaanddrop(){
        await this.dragme.dragTo(this.dropme);
    }
}