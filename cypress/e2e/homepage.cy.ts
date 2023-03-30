import { HomePage } from './page-objects/home.page'

const page = new HomePage()

describe('Home Page', () => {
  it('dropdown and content', () => {
    cy.visit('http://localhost:3000/react-multilevel-dropdown-menu')
    page.servicesDropDown().trigger('mouseover')
    page.homePageContent()
  })
})