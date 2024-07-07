describe('Validate Header', () => {
    it('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon');
        cy.get('@pokemon').its('headers').should('include', {
            'content-type': 'application/json; charset=utf-8'
        });
        cy.get('@pokemon').its('status').should('eq', 200);
        cy.get('@pokemon').its('body').should('have.property', 'id');
        cy.get('@pokemon').its('body').should('have.property', 'name');
        cy.get('@pokemon').its('body').should('have.property', 'height');
        cy.get('@pokemon').its('body').should('have.property', 'weight');
    });
});