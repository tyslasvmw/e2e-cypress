//Inside your home.page.ts file. This is pageobject file.
/// <reference types="cypress" />

export class HomePage {
  servicesDropDown = () => cy.get('button').contains('Services')

  homePageContent = () => cy.get('h2').contains('Home Page Content')
}