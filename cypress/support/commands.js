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

// iframe import
import 'cypress-iframe';

//iframe add custom commands
Cypress.Commands.add('iframeFormInteraction', (formDetails) => {
    return cy.get('.calendly-inline-widget iframe')
        .should('be.visible')
        .its('0.contentDocument.body').should('be.visible')
        .then($body => {
            cy.wrap($body).find('[aria-label="Select a Day"]').should('be.visible');
            cy.wrap($body).find('[data-testid="calendar-table"] td').find('button:enabled').eq(0).click();
            cy.wrap($body).find('[role="listitem"]').eq(0).click();
            cy.wrap($body).find('[role="listitem"]').eq(0).find('button:enabled').click();
            
            fillFormFields($body, formDetails);
        });
});

function fillFormFields($body, formDetails) {
    cy.wrap($body).find('[name="first_name"]').type(formDetails.firstName);
    cy.wrap($body).find('[name="last_name"]').type(formDetails.lastName);
    cy.wrap($body).find('[type="email"]').type(formDetails.email);
    cy.wrap($body).find('[type="button"]').contains('Add Guests').click({ force: true });
    cy.wrap($body).find('#invitee_guest_input').type(formDetails.guestCount);
    cy.wrap($body).find('[name="question_0"]').type(formDetails.occupation);
    cy.wrap($body).find('[name="question_1"]').type(formDetails.organization);
    cy.wrap($body).find('[name="question_2"]').type(formDetails.address);
    cy.wrap($body).find('[name="question_3"]').eq(3).check({ force: true });
    cy.wrap($body).find('[name="question_4"]').eq(2).check({ force: true });
    cy.wrap($body).find('[name="question_4"]').eq(3).check({ force: true });
    cy.wrap($body).find('[name="question_5"]').type(formDetails.dmeNumber);
    cy.wrap($body).find('[name="question_6"]').type(formDetails.queryMessage);
    cy.wrap($body).find('[name="phone_number"]').type(formDetails.phoneNumber);
    cy.wrap($body).find('[type="submit"]').should('be.visible');
}
