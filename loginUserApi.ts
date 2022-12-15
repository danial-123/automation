Cypress.Commands.add("loginUser", (username: string, password: string) => {
    const loginUser = `mutation loginUser($username: String!, $password: String) {
      loginUser(username: $username, password: $password) {
        token
        user {
          bvid firstName lastName username role
          userMerchant {
            bvid storeName slug hasDomain
          }
          userMaster {
            bvid name slug hasDomain
          }
        }
      }
    }`
  
        cy.log(username, password)
      
    cy.request({
      method: "POST",
      url: Cypress.env("urls").pulseUrl,
      body: { query: loginUser, variables: { username, password } },
      failOnStatusCode: false
    }).then((response) => {
      return response.body.data.loginUser
    })
  })
  
  