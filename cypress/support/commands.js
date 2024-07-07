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
Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/users/login`,
        failonStatusCode: false,
        body: {
            email: email,
            password: password
        }
    }).then((response) => {
        // Pastikan response memiliki struktur yang diharapkan
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('sessionId');
        expect(response.body).to.have.property('userId');
        expect(response.body).to.have.property('userName');
        expect(response.body).to.have.property('email');
        expect(response.body).to.have.property('token');

        // Set cookies
        cy.setCookie('sessionId', response.body.sessionId);
        cy.setCookie('userId', response.body.userId);
        cy.setCookie('userName', response.body.userName);
        cy.setCookie('email', response.body.email);


        // Kunjungi halaman utama
        cy.visit('/#!/main');
    });
});



Cypress.Commands.add('loginAPI', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'https://the-internet.herokuapp.com/basic_auth',
        div: {
            username: 'admin',
            password: 'admin'
        }
    }).its('status').should('eq', 200); // Add assertion to check the response status
});

