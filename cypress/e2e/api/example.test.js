describe('API Example', () => {
  it('API TEST - Validate Header', () => {
    cy.request('http://pokeapi.co/api/v2/pokemon/25').as('pokemon');
    cy.get('@pokemon')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8');
  });
});