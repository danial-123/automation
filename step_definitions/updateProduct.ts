/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let username: string = Cypress.env('storeDetails').username
let pin: string = Cypress.env('storeDetails').pin
let product: string = Cypress.env('storeDetails').product
let Updateproduct: string
let Updatedescription: string
let Updateprice: string
let Updatediscount: string
let Updatecost: string
let Updatequantity: string
let updatebarcode: string

let token: string

And("And searches the product from the search bar", () => {
  cy.fixture("product").then((data) => {
    updatebarcode=data["product"]["updatebarcode"]
    cy.get("#search-textfield").type(`${updatebarcode}{enter}`)
  })
  
})

And("Open that product to update", () => {
  cy.contains("cricket bat").click();
  cy.get('[data-testid=EditIcon]').click()

})

And("Update all the values of the product and save it", () => {

  cy.fixture("product").then((data) => {
    Updateproduct = data["product"]["Updateproduct"]
    Updatedescription = data["product"]["Updatedescription"]
    Updateprice = data["product"]["Updateprice"]
    Updatediscount = data["product"]["Updatediscount"]
    Updatecost = data["product"]["Updatecost"]
    updatebarcode = data["product"]["updatebarcode"]

    cy.get('#product-name').clear()
    cy.get("#product-name").type(Updateproduct);
    cy.get("#product-description").clear()
    cy.get("#product-description").type(Updatedescription);
    cy.get("#product-price").clear()
    cy.get("#product-price").type(Updateprice)
    cy.get("#product-discounted-price").clear()
    cy.get("#product-discounted-price").type(Updatediscount);
    cy.get("#product-cost-price").clear()
    cy.get("#product-cost-price").type(Updatecost);
    cy.get("#product-profit-margin").click()
    
    cy.contains("Update Product").click();
  })
})

And("Again search the product from the search bar and open the product", () => {
  cy.get("#Products").click()
  cy.get("#search-textfield").type(`${updatebarcode}{enter}`)
  cy.contains("cricket bat").click();
  cy.get('.css-1b1jvye > :nth-child(2) > .MuiGrid-container > :nth-child(3)').click()

})

Then("The product should get updated", () => {
  cy.get("#product-name").should('have.value', Updateproduct);
  cy.log("**name updated successfully**");
  cy.get("#product-description").should('have.text', Updatedescription);
  cy.log("**description updated successfully**");
  cy.get("#product-price").should('have.value', Updateprice);
  cy.log("**price updated successfully**");
  cy.get("#product-discounted-price").should('have.value', Updatediscount);
  cy.log("**discounted price updated successfully**");
  cy.get("#product-cost-price").should('have.value', Updatecost);
  cy.log("**cost price updated successfully**");

})