describe('home blog agi', () => {
   
    beforeEach(() => {
      
      cy.visit('https://blogdoagi.com.br/');

      cy.viewport(1500, 768)
    }) 

    it('buscar lupa', () => {

        cy.get('button#search-open').click();
        cy.get('.desktop-search > .search-form > label > .search-field').type('00000');
        cy.get('.desktop-search > .search-form > .search-submit').click(); 
        cy.get('.entry-title').should('contain' ,'');
    }) 


})