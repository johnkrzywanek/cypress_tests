describe('WPE SPM API Test', () => {

    it('Get Sites data ', () => {
        cy.fixture('wpe').then((wpe_data) => {
            cy.request({
                url: `${wpe_data.api_url}/sites`,
                headers: {
                    "wpengine-key": wpe_data.api_token,
                },
            })
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
                    expect(response.body.sites[0]).to.have.property('provider', 'wpengine');
                })
                .its('headers')
                .its('content-type')
                .should('include', 'application/json')
        })

    })

})
