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
let variantbarcode: string
let variantOption1: string
let variantOption2: string
let OptionValueOneof1: string
let OptionValueTwoof1: string
let OptionValueThreeof1: string
let OptionValueOneof2: string
let OptionValueTwoof2: string
let Price1: string
let DisPrice1: string
let Price2: string
let DisPrice2: string
let Price3: string
let DisPrice3: string
let Price4: string
let DisPrice4: string
let Price5: string
let DisPrice5: string
let Price6: string
let DisPrice6: string
let token: string

And('click on the add button', () => {
  cy.get("#add-product-btn").contains("Add").click()
  cy.contains("Create Product").click()
})

And('filled all the product detailss', () => {
  cy.fixture("product").then((data) => {
    productName = data["product"]["name"]
    description = data["product"]["description"]
    price = data["product"]["price"]
    discount = data["product"]["discount"]
    cost = data["product"]["cost"]
    quantity = data["product"]["quantity"]
    variantbarcode = data["product"]["variantbarcode"]

    cy.get("#product-name").type(productName);
    cy.get("#product-description").type(description);
    cy.get("#product-price").type(price)
    cy.get("#product-discounted-price").type(discount);
    cy.get("#product-cost-price").type(cost);
    cy.get("#product-profit-margin").click()
    cy.get("#product-quantity-switch").check()
    cy.get("#product-quantity").type(quantity)
    cy.get("#product-barcode").type(variantbarcode)
  })
})

And("fill the variant details", ()=>{
    cy.fixture("product").then((data) => {
        variantOption1 = data["variant"]["variantOption1"]
        variantOption2 = data["variant"]["variantOption2"]
        OptionValueOneof1 = data["variant"]["OptionValueOneof1"]
        OptionValueTwoof1 = data["variant"]["OptionValueTwoof1"]
        OptionValueThreeof1 = data["variant"]["OptionValueThreeof1"]
        OptionValueOneof2 = data["variant"]["OptionValueOneof2"]
        OptionValueTwoof2 = data["variant"]["OptionValueTwoof2"]
        Price1 = data["variant"]["Price1"]
        DisPrice1 = data["variant"]["DisPrice1"]
        Price2 = data["variant"]["Price2"]
        DisPrice2 = data["variant"]["DisPrice2"]
        Price3 = data["variant"]["Price3"]
        DisPrice3 = data["variant"]["DisPrice3"]
        Price4 = data["variant"]["Price4"]
        DisPrice4 = data["variant"]["DisPrice4"]
        Price5 = data["variant"]["Price5"]
        DisPrice5 = data["variant"]["DisPrice5"]
        Price6 = data["variant"]["Price6"]
        DisPrice6 = data["variant"]["DisPrice6"]
        

        cy.get("#variants-btn").click()
        cy.get("#add-new-variant-option-btn").click()
        cy.get("#new-variant-option-title").type(variantOption1)
        cy.get("#save-new-variant-option-btn").click()
        cy.get("#add-new-variant-option-value-btn").click() 
        cy.get('#new-variant-option-value-title').type(OptionValueOneof1)
        cy.get("#save-new-variant-option-value-btn").click()
        cy.get("#add-new-variant-option-value-btn").click()
        cy.get('#new-variant-option-value-title').click()
        cy.get("#new-variant-option-value-title").type(OptionValueTwoof1)
        cy.get("#save-new-variant-option-value-btn").click()
        cy.get("#add-new-variant-option-value-btn").click()
        cy.get("#new-variant-option-value-title").type(OptionValueThreeof1)
        cy.get("#save-new-variant-option-value-btn").click()
        cy.get('#add-new-variant-option-btn').click()
        cy.get("#new-variant-option-title").type(variantOption2)
        cy.get("#save-new-variant-option-btn").click()
        cy.get('[data-rbd-draggable-id="Size"] > .jss84 > .jss85 > .MuiGrid-root > #add-new-variant-option-value-btn > .MuiButton-label').click()
        cy.get("#new-variant-option-value-title").type(OptionValueOneof2)
        cy.get("#save-new-variant-option-value-btn").click()
        cy.get('[data-rbd-draggable-id="Size"] > .jss84 > .jss85 > .jss88 > #add-new-variant-option-value-btn > .MuiButton-label').click()
        cy.get("#new-variant-option-value-title").type(OptionValueTwoof2)
        cy.get("#save-new-variant-option-value-btn").click()
        cy.wait(2000)
        cy.get("#ok-button").click()
        cy.get(':nth-child(1) > .MuiGrid-justify-content-xs-space-between > :nth-child(2) > button.MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.get("input[name='variantPrice']").should('have.value','1000')
        cy.get("input[name='variantPrice']").clear()
        cy.get("input[name='variantPrice']").type(Price1)
        cy.get("input[name='discountedPrice']").should('have.value','200')
        cy.get("input[name='discountedPrice']").clear()
        cy.get("input[name='discountedPrice']").type(DisPrice1)
        cy.get(".MuiButton-label").contains("Save").click()


    })

})


And("click on create product button", () => {
  cy.get("#save-product").click();
})

Then("product is created successfully", () => {
  cy.log("product successfully create");
})