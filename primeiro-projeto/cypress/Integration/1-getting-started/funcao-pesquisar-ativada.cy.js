describe('home blog agi', () => {
   
    beforeEach(() => {
      
      cy.visit('https://blogdoagi.com.br/');

      cy.viewport(1500, 768)
    }) 

    it('buscar lupa', () => {

      cy.get('button#search-open').click();
      cy.get('input.search-field').should('contain' ,'');

    }) 


})