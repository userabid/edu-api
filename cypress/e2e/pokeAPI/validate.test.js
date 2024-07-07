describe('Automation API with PokeAPI', () => {
    it('Successfully validate Content-Type', () => {
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

    it('Successfully validate Status Code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto');
        cy.get('@ditto').its('status').should('eq', 200);
    });

    it('Successfully validate with param', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('users');
        cy.get('@users').its('status').should('eq', 200);
        cy.get('@users').its('body').should('have.property', 'id');
    });

    it('Successfully validate with param', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur');
        cy.get('@bulbasaur').its('body').should('include', {
            name: "bulbasaur"
        });
    });

    //Tugas
    it('Successfully validate with param', () => {
        cy.request('get', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.body).to.have.property('id');
            expect(response.body.abilities[0].ability.name).to.eq('limber');
        });
    });
});