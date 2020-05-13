describe('WPE visual regression Test', () => {

    it('Visits the plans page ', () => {
        cy.visit('https://wpengine.com').then(() => {
            cy.document()
                .toMatchImageSnapshot({
                    imageConfig: {
                        "createDiffImage": true,
                        "threshold": 0.01,
                        "thresholdType": "percent",
                    },
                    name: 'vrttest',
                });
          });


    })

})
