describe ('checkboxes', ()=>{
    it ('checkboxes test' ,()=>{
        cy.visit('http://uitest.automationtester.uk/basic-checkbox-demo.html')
        cy.get('#isAgeSelected').check().should('be.checked')
        cy.get('#isAgeSelected').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').first().check()  //eq(0)
        cy.get('input[type="checkbox"]').last().check()  //eq(-1)

        cy.get('input[type="checkbox"]').first().then($ele =>{
            const ischecked = $ele.is(':checked')
            cy.log('check box is checked',ischecked)
            if(ischecked) {
                cy.get('#txtAge').should('have.text','success - Check box is checked')
            }

        })
    })
    
})