describe('Launching Browser', () => {

  it('**Verifying login page should get visible**', () => {

    cy.visit('https://c2.link4cloud.com/usa/c18/sites/FcRt5He00SRmXOY1/zones/ZCZrrWx4elkbzBUV')

    cy.get('#if-email').type("danialhussain392@gmail.com")
    cy.get('#if-password').type("Test_Password_175")
    cy.get('#login-button').click()
    
    
    cy.wait(4000)
    cy.reload()
    cy.wait(4000)
    cy.contains("Inside Temperature").eq(0).click()
    cy.get("select[style='background-color: rgba(58, 130, 247, 0.192);']").select("Software")
    cy.get("input[inputmode='decimal']").eq(6).type("75");
    cy.get('.save-cancel-box > .filled').click()
    //cy.wait(5000)
    cy.contains("Danial Hussain").click()
    cy.get('#popup > .alignright > .filled').click()
    cy.contains("Inside Humidity").eq(0).click()
    cy.get("select[style='background-color: rgba(58, 130, 247, 0.192);']").select("Software")
    cy.get("input[inputmode='decimal']").eq(6).type("48");
    //cy.get('.save-cancel-box > .filled').click()

    cy.wait(5000)
    cy.contains("Danial Hussain").click()
    cy.get('#popup > .alignright > .filled').click()

    cy.get('tbody > :nth-child(2) > :nth-child(1) > .name').click()
    // cy.get(".custom-select float-left-box").eq(0).select("On Off")
    cy.get("input[id='{\"cmd\":\"watch\",\"type\":\"channel_On_Off\",\"id\":507,\"zuci\":\"2-0-0-0\"}']").type("danial")
    // cy.get("div[style='background-color: rgb(255, 255, 255); display: none; border-radius: 10px; padding: 0px 20px 20px; box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 24px; text-align: left;']").selectFile('cypress/fixtures/image/jj.jpg')
    cy.get('.save-cancel-box > .filled').click()

    cy.get("a[class='colored-link-text floatright material-icons-outlined add']").contains("add").click()
    cy.get(".fullwidth").type("interview question")
   // cy.get("#react-select-2-input").click()
   cy.get("button[class='only-icon floatleft filled material-icons-outlined']").eq(0).click()
   cy.contains("Danial Hussain").click()
   
  })
})