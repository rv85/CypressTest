describe('select practice',() =>{
    it ('select', ()=>{
        cy.visit('http://uitest.automationtester.uk/basic-select-dropdown-demo.html')
        cy.get('#select-demo').select('Saturday').should('have.value','Saturday')
        cy.get('#multi-select').select(['California','New York'])

    })

})
