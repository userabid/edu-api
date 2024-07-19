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
Cypress.Commands.add('loginAPI', (username, password) => {
    cy.request({
        method: 'GET',
        url: 'https://the-internet.herokuapp.com/basic_auth',
        div: {
            username: 'admin',
            password: 'admin'
        }
    }).its('status').should('eq', 200); // Add assertion to check the response status
});


Cypress.Commands.add('loginnyaAPI', () => {
    cy.fixture("cypress").then(cypress => {
        const token = cypress.env.authToken

        console.log(' Auth Token:', token);
        cy.log('Auth Token:', token);

        cy.request({
            method:"GET",
            url: "/basic_auth",
            failonStatusCode: false,
            headers: {
                'Authorization': token
            }
    }).then((response) => {

        const token = cy.fixture.cypress;
        console.log('Auth Token:', token);

        console.log('response:', response);
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(200);
    })


        // Kunjungi halaman utama
        cy.visit('/#!/main');
    })
})
