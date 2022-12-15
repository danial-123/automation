/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let username: string = Cypress.env('storeDetails').username
let pin: string = Cypress.env('storeDetails').pin
let productName: string
let description: string
let price: string
let discount: string
let cost: string
let quantity: string
let barcode: string

let token: string
And('click on the add button', () => {
  cy.get("#add-product-btn").contains("Add").click()
  cy.contains("Create Product").click()
})

And('filled all the product details', () => {
  cy.fixture("product").then((data) => {
    productName = data["product"]["name"]
    description = data["product"]["description"]
    price = data["product"]["price"]
    discount = data["product"]["discount"]
    cost = data["product"]["cost"]
    // quantity = data["product"]["quantity"]
    barcode = data["product"]["barcode"]

    cy.get("#product-name").type(productName);
    cy.get("#product-description").type(description);
    cy.get("#product-price").type(price)
    cy.get("#product-discounted-price").type(discount);
    cy.get("#product-cost-price").type(cost);
    cy.get("#product-profit-margin").click()
    // cy.get("#product-quantity-switch").check()
    // cy.get("#product-quantity").type(quantity)
    cy.get("#product-barcode").type(barcode)
  })
})

And("click on create product button", () => {
  cy.get("#save-product").click();
})

Then("product is created successfullyy", () => {
  
  cy.log("product successfully create");
  
  cy.clearCookies()
  cy.get("#Products").click()

  cy.reload()

  
})