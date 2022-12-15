/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      loginUser(username: string, password: string): Chainable<any>
    }
}