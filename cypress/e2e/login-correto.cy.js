describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos do login corretamente e autentica o usuário na página', () => {
    cy.login('ana@email.com', 'Senha123')
  })

    it('Login pelo ícone de mensagem', () => {
    cy.get('.header__message').click();
    cy.login('ana@email.com', 'Senha123')
  })
})
