describe('WPE Landing page Test', () => {

    beforeEach(() => {
        cy.visit('https://wpengine.com');
        cy.closePopupIfVisible();
    })

    it('Visits the plans page ', () => {
        cy.get('a').should('contain', 'Get Started');
        cy.closePopupIfVisible();
        cy.contains('Get Started').click();
        cy.url().should('include', '/plans');
        cy.get('select.currency').first().select('aud');
        cy.get('select.currency').first().select('eur');

    })

})
