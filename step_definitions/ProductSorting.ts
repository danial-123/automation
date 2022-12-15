/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

And('check on the product page', ()=>{
 
cy.wait(4000)
cy.get(':nth-child(1) > .MuiPaper-root > .jss60').eq(0).should('have.text', 'Bonus detergent Rs. 50Rs. 50100%off')
cy.get(".MuiTypography-root.jss56.MuiTypography-body2.MuiTypography-colorTextSecondary").eq(4).should("have.text","Mitchells Mixed Fruit Jam 450g")
cy.get(".MuiTypography-root.jss56.MuiTypography-body2.MuiTypography-colorTextSecondary").eq(1).should("have.text", "Lux ")
})

Then("product has been sort successfully", ()=>{
cy.log("**Product successfully sorted**")
})