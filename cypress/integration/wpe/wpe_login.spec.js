describe('WPE Login Test', () => {

    beforeEach(() => {
        cy.login();
    })

    it('Checks if logged in ', () => {
        cy.get('.search-bar-header').should('contain', 'Find a site');
    })
    
})
