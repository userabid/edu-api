describe('Create User', () => {
    it('Verify the user is created', () => {
        var user = {
            name: 'Eduwork',
            job: 'QA'
        }
    
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: user
        }).then((Response) => {
            expect(Response.status).equal(201);
            expect(Response.body.name).equal(user.name);
            expect(Response.body.job).equal(user.job);
        });
    });
});