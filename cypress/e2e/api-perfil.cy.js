describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc1MTQ3MjI1NSwiZXhwIjoxNzUxNzMxNDU1fQ.nRzsrzCyJqw8Uiomw7ju4zubwkXH-PXhJOe3V_NV6GQ`

  it('Perfil da API', () => {
    cy.request({
        method: 'GET',
        url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
        headers: { authorization }
    }).then((res) => {
        console.log(res.body) // <-- Vai mostrar o que realmente vem no body
        expect(res.body).to.have.property('mensagem')
        expect(res.body).to.have.property('perfil')
    })
  })
})