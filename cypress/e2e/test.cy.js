describe('Katalon Application', () =>{

    it("Home Page", () => {

        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#txt_visit_date').type('04/05/2024');
        cy.get('#btn-book-appointment').click();
    })
})