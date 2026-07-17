
// //want to get the value of the itme selected from drop down into a variable

// //const inputvalueofdropdown=await page.locator("#searchDroDownbox").inputvalue()   
// // the value is store in variable inputvalueofdropdown
// //to fetch the value from dropdown we use inputvalue()

// //to validate if input value is correct we use this line
// // expect(inputvalueofdropdown).toBe("search.alias=amazon-devices");



// to check if the default value in drop is something we use below

// const inputvalueofdropdown=await page.locator("#searchDroDownbox" option:checked").textContent();
//     expect(inputvalueofdropdown).toBe("All Categories") //to check if the default search in drop down is All categories

//number of options in dropdown
//const countofelements = wait page.locator("#searchDroDownbox").count()
//console.log(countofelements) //result showed 44
//expectFailure(countofelements).toBe(44)  this is to validate yes it has 44 items


//Custom Drop DOWN
// await.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


//