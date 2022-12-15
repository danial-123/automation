
/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let username: string = Cypress.env('storeDetails').username
let pin: string = Cypress.env('storeDetails').pin
let productName: string
let description: string
let price: string
let discount: string
let cost: string

let variantbarcode: string

let token: string

Given('Merchant is logged in restaurant', () => {
  cy.loginUser(username, pin).then((returnedToken) => {
    token = returnedToken.token
    cy.wrap(token).as('token')
  })
})

When('I am on the homepage', () => {
  cy.fixture("configuration").then((data) => {
    cy.get("@token").then((token) => {
      data["userDetail"]["token"] = token
      window.localStorage.setItem("user", JSON.stringify(data["userDetail"]))
    })
  })
  cy.visit(Cypress.env('storeDetails').baseUrl);
})


And('i am on the product screen', () => {
  cy.get("#Products").click()
})

And('click on the add button', () => {
  cy.contains("Add").click()
  cy.contains("Create Product").click()
})

And('filled all the productss details', () => {
  cy.fixture("product").then((data) => {
    productName = data["product"]["name"]
    description = data["product"]["description"]
    price = data["product"]["price"]
    discount = data["product"]["discount"]
    cost = data["product"]["cost"]
    variantbarcode = data["product"]["variantbarcode"]

    cy.get("#product-name").type(productName);
    cy.get("#product-description").type(description);
    cy.get("#product-price").type(price)
    cy.get("#product-discounted-price").type(discount);
    cy.get("#product-cost-price").type(cost);
    cy.get("#product-profit-margin").click()
    
  })
})

And("fill the both options details", ()=>{
    cy.fixture("product").then((data) => {
       
      cy.get('.jss54 > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click()
      cy.get("input[placeholder='e.g. Choose type of bread']").type("this is heading")
      cy.get("input[placeholder='e.g. Regular Meal']").type("this is option value name")
      cy.get("input[placeholder='+0'][name='optionPrice']").type("100")
      cy.get("input[placeholder='+0'][name='discountedPrice']").type("90")
      cy.get(':nth-child(8) > .MuiGrid-root > .MuiButtonBase-root').click()

    
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("this is 2nd heading")
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("120")
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("80")
      cy.contains("Create Options").click()
      cy.get('#ok-button').click()
      let template_name = (Math.random() + 1).toString(36).substring(7);
      cy.get("input[placeholder='e.g. Size'][name='template-name']").type(template_name)
      cy.contains("Save").click()


      cy.get('.jss54 > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click()
      cy.get("input[placeholder='e.g. Choose type of bread']").type("this is heading")
      cy.get("input[placeholder='e.g. Regular Meal']").type("this is option value name")
      cy.get("input[placeholder='+0'][name='optionPrice']").type("100")
      cy.get("input[placeholder='+0'][name='discountedPrice']").type("90")
      cy.get(':nth-child(8) > .MuiGrid-root > .MuiButtonBase-root').click()

    
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("this is 2nd heading")
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("120")
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("80")
      cy.contains("Create Options").click()
      cy.get('#ok-button').click()
      let new_template_name = (Math.random() + 1).toString(36).substring(7);
      cy.get("input[placeholder='e.g. Size'][name='template-name']").type(new_template_name)
      cy.contains("Save").click()

})


And("click on create product button", () => {
  cy.get("#save-product").click();
})

Then("product is created successfully", () => {
  cy.log("product successfully create");
})
})