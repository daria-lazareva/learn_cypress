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

    it('left pane check', () => {
        cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')

        cy.get('.dock')
            .children()
            .should('have.length', 7)
        cy.get('.sidebar-item.dashboard')
            // .parent('.dock')
            .should('have.text', 'Dashboard')
            .should('have.class', 'active-item')
            .should('have.css', 'background-color', 'rgb(117, 117, 255)')
        
        cy.get('.dashboard')
            .find('.dashboard-image')
            .find('.icon-dashboard')
            .should('have.css', 'font-family', 'icons')

        cy.get('.image > img')
            .should('have.attr', 'src', './assets/images/Admin.png')
            .should('have.css', 'height', '80px')

        cy.get('.name')
            .should('have.text', 'Jane Doe')
            .should('have.css', 'font-size', '16px')
        
        cy.get('.user-type')
            .should('have.text', 'Admin')
            .should('have.css', 'font-size', '11px')
    })
});