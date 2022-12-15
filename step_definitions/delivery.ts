/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { eq } from "../../../node_modules/cypress/types/lodash/index"
import 'cypress-wait-until';


let desiredTotalValue = "189"
let username: string = Cypress.env('storeDetails').username
let pin: string = Cypress.env('storeDetails').pin
let phone: string= Cypress.env('storeDetails').phone

let token: string


Given('Merchant is logged in', () => {
  cy.loginUser(username, pin).then((returnedToken) => {
    token = returnedToken.token
    cy.wrap(token).as('token')
  })
})

When('I am on the homepage', () => {

  cy.fixture("configuration").then((data) => {
    cy.get("@token").then((token) => {
      data["userDetails"]["token"] = token
      window.localStorage.setItem("user",JSON.stringify(data["userDetails"]))
    })
  })
  cy.visit(Cypress.env('storeDetails').baseUrl);
})


And("i am on the pos d-screen", () => {
 cy.log("This the POS Screen")
})
And('select the delivery',()=>{
})

And("check the customer details by entering number", () => {
   
    cy.waitUntil(()=> cy.get(".css-8i4dsq > .MuiTypography-root").then((obj)=>obj.text()==="Syncing has completed.")
  ,{timeout:1000000000000}  ) 
   cy.wait(10000) 
  
 cy.get("#ok-button").click()
  cy.contains("Delivery").click()

  cy.get("input[placeholder='Enter Customer Phone Number']").type(phone);
  cy.get("input[name='customer_name']").should('have.value', 'danial ')
  cy.log("**customer name is perfect**")
  cy.get('.MuiListItemText-root > .MuiTypography-root').should('have.text', 'test')
  cy.log("**customer address is perfect**");

})

And("i search the product with name {string}", (productName) => {
  cy.get('#search-textfield').type(`${productName}{enter}`)
  cy.contains("Tuc").click();
})

And("check the calculation", () => {


  cy.contains(" Custom Item").click();
  cy.get("input[placeholder='Extra Raita']").type("product1");
  cy.get("input[placeholder='200']").type("57");
  cy.contains("Done").click();

  cy.contains(" Custom Item").click();
  cy.get("input[placeholder='Extra Raita']").type("product2");
  cy.get("input[placeholder='200']").type("107");
  cy.contains("Done").click();


  let PriceOfOne;
  cy.get(':nth-child(1) > .MuiGrid-grid-md-2 > .MuiTypography-root').then(function (price1) {
    PriceOfOne = price1.text();
    cy.log(price1.text());
    PriceOfOne = parseInt(PriceOfOne);
    cy.log(typeof PriceOfOne);
    cy.log("Price of one: ", PriceOfOne);

    let PriceOfTwo;
    cy.get(':nth-child(2) > .MuiGrid-grid-md-2 > .MuiTypography-root').then(function (price2) {
      PriceOfTwo = price2.text();
      PriceOfTwo = parseInt(PriceOfTwo);
      cy.log(typeof PriceOfTwo);
      cy.log("Price of two: ", PriceOfTwo);
      let ProductTotal: any = (parseInt(PriceOfOne) + parseInt(PriceOfTwo))
      cy.log(ProductTotal);
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .MuiTypography-root').should('have.text', desiredTotalValue)
      cy.log("**subtotal is perfect**");


      cy.get(':nth-child(3) > :nth-child(2) > .MuiTypography-root').should('have.text', '38')
      cy.log("**tax is perfect**");

      cy.get(':nth-child(5) > .MuiGrid-container > :nth-child(2) > .MuiTypography-root').should("have.text","227")
      cy.log("**total is perfect**");


    });

  })
})
And("go to the checkout page", () => {
  cy.contains("Proceed").click()
})

And("click on place order button", () => {

  cy.contains("Create Order").click();


})
  
Then("my order should get place", () => {
  cy.log("order has been placed successfully")
 

})

// Then("open the details on orders detail page",()=>{
//   cy.wait(5000)

//     cy.get("#Orders").click()
//     cy.wait(4000)
//     cy.reload()
//     var today = new Date() ;
  
//     let time : any
//     time = today.getHours()%12||12 + ":" + String(today.getMinutes()).padStart(2,"0") ;
//     cy.log(time);
//     cy.wait(3000)
//     cy.contains(time).eq(0).click()
    

// })

// Then("verify the details",()=>{
//   cy.get('.jss63 > :nth-child(2) > :nth-child(1) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root').should("have.text","danial ")
//   cy.get('.MuiGrid-grid-xs-4 > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root').should("have.text","test, Abbottabad")
//   cy.get('.jss63 > :nth-child(2) > .MuiGrid-grid-xs-12 > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root').should('have.text','+923197826342')

//   cy.get(".MuiTypography-root.jss92.MuiTypography-caption").eq(0).should('have.text', 'Rs. 189')
//   cy.get(".MuiTypography-root.jss92.MuiTypography-caption").eq(1).should('have.text', 'Rs. 38')
//   cy.get(".MuiTypography-root.jss92.MuiTypography-caption").eq(3).should('have.text', 'Rs. 80')
//   cy.get(".MuiTypography-root.jss92.jss93.MuiTypography-caption").should('have.text','Rs. 307')

//   cy.get(".MuiButton-label").eq(1).should('have.text','Ready for Delivery')
//   cy.contains("Ready for ").click()

//   cy.get(".MuiButton-label").eq(1).should('have.text','Dispatch')
  
//   cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click()

//   cy.contains("Rider").click()
//   cy.contains("dani ").click()
//   cy.contains("Done").click()

//   cy.get(".MuiButton-label").eq(1).should('have.text','Delivered')
//   cy.contains("Delivered").click()

//   cy.get('.MuiButton-label').should('have.text','Order Return')
//   cy.log("**Order Successfully processed**")




//   cy.pause()
// })

