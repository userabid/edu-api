describe('API Testing with Cypress', () => {
  it('GET - read', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('equal', 200);
  });

  it('POST - create', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });

  it('PUT - update', () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });

  it('DELETE - delete', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('equal', 200);
  });
});
