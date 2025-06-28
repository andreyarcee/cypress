describe('Página princial', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('verificar mensagens da home', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    cy.contains('Quem ama adota!').should('be.visible')
  })
    it('Login pela home', () => {
    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})
