// Cypress test
import React from 'react'
import {mount} from 'cypress-react-unit-test'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../index.css";

/* global cy */
describe('App', () => {
  it('works', () => {
    const TestApp = () => <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

    mount(<TestApp />)
    cy.contains('Turn On').click().wait(1000).click()
    cy.contains('a', 'About').click()
    cy.url().should('match', /\/about$/)
    cy.contains('About page').should('be.visible')
    cy.go('back')
    cy.contains('a', 'Users').click()
    cy.url().should('match', /\/users$/)
  })
})
