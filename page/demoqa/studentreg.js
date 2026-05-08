
export class studentreg{
constructor(page){
    this.page=page
    this.name=page.locator('[id="firstName"]')
    this.lastname=page.locator('[id="lastName"]')
    this.email=page.locator('[id="userEmail"]')
    this.male=page.locator('[id="gender-radio-1"]')
    this.female=page.locator('[id="gender-radio-2"]')
    this.other=page.locator('[id="gender-radio-3"]')
    this.mobile=page.locator('[id="dateOfBirthInput"]')
    this.subject=page.locator('[class="subjects-auto-complete__input-container css-19bb58m"]')
    this.hobby1=page.locator('[id="hobbies-checkbox-1"]')
    this.hobby2=page.locator('[id="hobbies-checkbox-2"]')
    this.hobby3=page.locator('[id="hobbies-checkbox-3"]')
    this.picture=page.locator('[id="uploadPicture"]')
    this.piccurrentaddress=page.locator('[id="currentAddress"]')
    //checkbox
    this.submit=page.locator('[id="submit"]')
    this.close=page.locator('[id="closeLargeModal"]')
}
}




[