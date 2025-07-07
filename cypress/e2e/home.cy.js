describe('Página princial', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('verificar mensagens na página principal', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    cy.contains('Quem ama adota!').should('be.visible')
  })

  it('verificar se as imagens dos pets aparecem na home', () => {
    cy.get('.button').click();
    cy.get('.cards').should('be.visible')
  })
})
