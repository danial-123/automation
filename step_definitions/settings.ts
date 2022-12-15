/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let username: string = Cypress.env('storeDetails').username
let pin: string = Cypress.env('storeDetails').pin
let token: string

And('I am on the settings screen', ()=>{
    cy.get("#Settings").click()
})

And('fill the details of store settings',()=>{
    cy.get("#whatsapp-number").clear()
    cy.get("#whatsapp-number").type("03100103878")

    cy.get("#tax-id").clear()
    cy.get("#tax-id").type("12345678")

    cy.get('#store-banner-message').clear()
    cy.get('#store-banner-message').type("testing store for testers")

    cy.get("#save-store-settings").click()
    
})

And('set the Pre payment configurations',()=>{
    cy.contains("After Order Accepted").click()
    cy.contains("Checkout").click()
})

// And('set the operating hours',()=>{
//     // cy.get(':nth-child(2) > :nth-child(1) > .jss89 > :nth-child(2) > .MuiFormGroup-root > .MuiGrid-container > .MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
//     // cy.get('.MuiBox-root > :nth-child(1) > :nth-child(1) > :nth-child(2)').click()
//     // cy.get(".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiOutlinedInput-inputAdornedEnd").eq(1).click()
//     // cy.get(':nth-child(3) > .MuiFormGroup-root > .MuiGrid-spacing-xs-2 > .MuiGrid-grid-xs-6 > .MuiBox-root > :nth-child(1) > :nth-child(2) > :nth-child(11)').click() 
//     // cy.get("#save-store-timings").click()
// })

And('set the fullfillment options and pickup detail',()=>{
    cy.get('#delivery > .MuiTypography-root').click()
    cy.get("#gifting").click()
    cy.get("#storePickup").click()
    cy.get("#delivery").click()
    cy.get("#gifting").click()
    cy.get("#storePickup").click()
    cy.get("#store-pickup-time").click()
    cy.get('[data-value="10"]').click()
    cy.get("#save-store-pickup-details").click()

})

And('click on the save button',()=>{
    
})

Then('my details should get saved',()=>{
    
})
