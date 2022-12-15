/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let username: string = Cypress.env('storeDetails').username
let pin: string = Cypress.env('storeDetails').pin
let barcode: string = Cypress.env('storeDetails').barcode

let token: string

And("And search the product from the search bar", ()=>{
  cy.fixture("product").then((data) => {
    barcode=data["product"]["updatebarcode"]
    cy.get("#search-textfield").type(`${barcode}{enter}`)
  })})

And("Open that product", ()=>{
    cy.contains("cricket bat").click();
})

And("Click on Delete icon", ()=>{
  cy.get('[data-testid=DeleteOutlineOutlinedIcon]').click()
    
})

Then("The product should get deleted", ()=>{
  cy.get('#ok-button').click()
  cy.log("**product deleted**")
    
    })
   
   
