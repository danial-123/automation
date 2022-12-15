/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let desiredTotalValue = "189"

let username: string = Cypress.env('storeDetails').username
let pin: string = Cypress.env('storeDetails').pin
let phone: string= Cypress.env('storeDetails').phone
let token: string
And("select the pickup", () => {

    cy.contains("Pick up").click()
})

And("check the customer details by entering number for pickup", () => {
  cy.waitUntil(()=> cy.get(".css-8i4dsq > .MuiTypography-root").then((obj)=>obj.text()==="Syncing has completed.")
  ,{timeout:1000000000000}  ) 
   cy.wait(10000) 
  
 cy.get("#ok-button").click()

  cy.get("input[placeholder='Enter Customer Phone Number']").type(phone);
  cy.get("input[name='customer_name']").should('have.value', 'danial ')
  cy.log("**customer name is perfect**")
  

})
And("i search the product with name {string} for pickup", (ProuctName)=>{
  cy.get("input[placeholder='Start typing or scanning products']").type("tuc{enter}")
  cy.wait(3000)
  cy.contains("Tuc").click();
})


And("check the calculation for pickup", () => {

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
And("go to the checkout page for pickup", () => {
    
  cy.contains("Proceed").click();
      cy.contains("5000").click();

})

And("click on place order button for pickup", () => {
 
  cy.get(':nth-child(6) > .MuiGrid-container > :nth-child(1) > .MuiButton-root').click()

})

Then("my order should get place for pickup", () => {
  cy.log("order has been placed successfully")
})
  