describe('Página princial', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('verificar mensagens da home', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    cy.contains('Quem ama adota!').should('be.visible')
  })

  it('verificar se as imagens dos pets aparecem', () => {
    cy.get('.footer__img').should('be.visible')
  })

})
