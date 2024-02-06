describe('URL test',()=> {
    it('URL commands',()=>{
        //To navigate to specific URL
        cy.visit('http://uitest.automationtester.uk/')

        //Location
        cy.location('href').should('eq','http://uitest.automationtester.uk/')
        cy.location('protocol').should('eq','http:')
//Multiple assertions in loation object
        cy.location().then(loc=>{
            cy.log(loc)
            expect(loc.href).to.equal('http://uitest.automationtester.uk/')
            expect(loc.protocol).to.equal('http:')

        })
        //Get current url
        cy.url()
        //page title
        cy.title().should('eq','Axone-UK - Best Demo website to practice Selenium Webdriver Online')


        //reload
        cy.reload()
    })
        it('Accessing elements',()=>{
            cy.visit('http://uitest.automationtester.uk/')
            cy.get('#btn_basic_example')
            cy.get('#home')

        })
    })

