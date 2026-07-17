export class HomeLoanCalculator{
    constructor(page){
        this.page=page;
        //this.singleapptype=page.getByText('Single')
        this.singleapptype = page.locator('#application_type_single')
        this.jointapptype=page.getByText('Joint');
        //this.numberofdependents=page.locator('[title="Number of dependants"]')
        this.numberofdependents = page.locator('[title="Number of dependants"]');
        this.borrowtype=page.locator('[id="borrow_type_home"]');
        this.annualincome=page.getByRole('textbox', { name: 'Your annual income (before' }) //located by pick locator  
        this.otherincome=page.getByRole('textbox', { name: 'Your annual other income (' }) //pick locator
        this.monthlylivingexpense=page.locator('[id="expenses"]');
        this.currenthomeloanrepay=page.locator('[id="homeloans"]');
        this.otherloanrepay=page.locator('[id="otherloans"]')
        this.othermonthlycommitments=page.getByRole('textbox', { name: 'Other monthly commitments' }); //pick locator
        this.totalcredit=page.locator('[id="credit"]')
        this.howmuchborrowButton=page.locator('[id="btnBorrowCalculater"]');
        this.startover=page.getByRole('button',{ name: 'start over' }); // i tried.

    }

     async fillAllfield(){
     await this.singleapptype.click();
    await this.numberofdependents.selectOption({ index: 0 });  //used index value to select drop down
    await this.borrowtype.click();
    await this.annualincome.fill('100000');
    await this.otherincome.fill('10000');
    await this.monthlylivingexpense.fill('2000');
    await this.currenthomeloanrepay.fill('0');    
    await this.otherloanrepay.fill('100');         
    await this.totalcredit.fill('10000');
    await this.howmuchborrowButton.click();
    
    
     }

     async cleardata(){
        await this.startover.click();
     }

    }
