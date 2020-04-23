// Cypress test
import React from 'react'
import {mount} from 'cypress-react-unit-test'
import { GlobalStyles } from ".";

/* global cy */
describe('Global styles', () => {
  it('is light by default', () => {
    mount(<GlobalStyles><div>Child element</div></GlobalStyles>)
  })

  it('is dark', () => {
    mount(<GlobalStyles darkModeEnabled={true}><div>Child element</div></GlobalStyles>)
    cy.contains('Child element').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })
})
