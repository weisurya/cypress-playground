const URL = 'https://example.cypress.io'

describe('My first test', () => {
    it('should be succeed!', () => {
        expect(true).to.equal(true);
    })
    // it('should be failed!', () => {
    //     expect(true).to.equal(false);
    // })
})

describe('My second test', () => {
    it('should able to visit the Kitchen Sink website', () => {
        cy.visit(URL);
    })
    it('should able to query for an element - type', () => {
        cy.visit(URL);

        cy.contains('type');
    })
    it('should able to click an element - type', () => {
        cy.visit(URL);

        cy.contains('type').click();
    })
    it('should able to make an assertion - URI', () => {
        cy.visit(URL);

        cy.contains('type').click();

        cy.url().should('include', '/commands/actions');
    })
    it('should able to make chain processes', () => {
        cy.visit(URL);

        cy.contains('type').click();

        cy.get('.action-email')
          .type('fake@gmail.com')
          .should('have.value', 'fake@gmail.com');
    })
    it('should paused in the middle before clicking "type" - need to continue it manually', () => {
        cy.visit(URL);

        cy.get('#utilities').pause();
    })
    it('should debug - show on the console', () => {
        cy.visit(URL);

        cy.get('#utilities').debug();
    })
})