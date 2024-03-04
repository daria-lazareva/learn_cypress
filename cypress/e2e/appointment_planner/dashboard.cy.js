describe('dashboard', () => {
    it('header check', () => {
        cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')
        cy.get('.clinic-image')
            .parent('.name-cantainer');
        cy.get('.clinic-name')
            .parent('.name-cantainer')
            .should('contain.text', 'APPOINTMENT PLANNER')
        cy.get('.icon-logout')
            .should('have.css', 'font-family', 'icons')
            
        cy.get('.logout-name')
            .should('contain.text', 'Logout')
        cy.get('.github-image > img')
            .should('have.attr', 'src', './assets/Icons/Mark.svg')
    });
});