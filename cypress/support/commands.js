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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-plugin-snapshots/commands';

Cypress.Commands.add("login", () => {

    cy.fixture('wpe').then((wpe_data) => {
        cy.log(wpe_data);
        cy.visit(wpe_data.wpe_url);
        cy.get('#user_email').type(`${wpe_data.email}{enter}`);
        cy.get('#user_password').type(`${wpe_data.pass}{enter}`);
    });

});

Cypress.Commands.add("closePopupIfVisible", () => {
    cy.get('#opt-in-modal-title').then(($advert_popup) => {
        if ($advert_popup.is(':visible')) {
            cy.get('.opt-in-modal__consent-button').click();
        }
    });
});
