describe('pause and wait test',()=>{
    it('pause',()=>{
        cy.visit('http://uitest.automationtester.uk/input-form-demo.html')
        cy.pause()
        cy.get('input[name="first_name"]').type('Ravi')
        cy.get('input[name="last_name"]').type('Gugloth')


    })
    it ('wait',()=>{
        cy.visit('http://uitest.automationtester.uk/input-form-demo.html')
        // cy.wait(5000)
        cy.log('Url loaded')
        cy.get('input[name="first_name"]').type('Ravi')
        cy.log('Entered first name')
        cy.get('input[name="last_name"]').type('Gugloth')

    })
})