describe('Update user', () => {
    it('successfully update user', () => {
        var user = {
            name: 'Abid',
            email: 'abid.email@gmail.com'
        }

        cy.request('PUT', 'https://reqres.in/api/users/2', user).then(Response => {
            expect(Response.status).to.eq(200)
            expect(Response.body.name).to.eq(user.name)
            expect(Response.body.email).to.eq(user.email)
        })
    })
})