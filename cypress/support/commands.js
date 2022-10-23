// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('logIn', (email, password) => {
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('#login').click()
   })
  
 
Cypress.Commands.add('logOut', () => {
    cy.get('#logout_button').click()
  })
  
Cypress.Commands.add('validateLoginPage', () => {
    cy.get(':nth-child(1) > .col-2').contains('Email')
    cy.get(':nth-child(2) > .col-2').contains('Password')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#login').contains('Login')
  })
  
Cypress.Commands.add('validateLandingPage', () => {
    cy.get('#go_to_not_found').should('be.visible').contains('Not found')
    cy.get('#go_to_service_unavailable').should('be.visible').contains('Service unavailable')
    cy.get('#go_to_profile').should('be.visible').contains('Profile')
  })
  
Cypress.Commands.add('validateProfilePage', () => {
    cy.get('.col-6 > .btn').contains('Back to landing page')
    cy.get('label').contains('username')
    cy.get('#file')
    cy.get('#upload').contains('Submit')
  })

Cypress.Commands.add('navigateToProfilePage', () => {
    cy.get('#go_to_profile').click()
  })
  
  
  //
  //
  // -- This is a child command --
  // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
  //
  //
  // -- This is a dual command --
  // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
  //
  //
  // -- This will overwrite an existing command --
  // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
  /// <reference types="cypress"/>
  
  /// <reference types="cypress-xpath"/>
  
  import 'cypress-file-upload';
  import '@4tw/cypress-drag-drop';
  Cypress.on('uncaught:exception', (err, runnable) => {
      
      return false
    })
  
  
  