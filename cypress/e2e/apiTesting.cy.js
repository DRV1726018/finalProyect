describe('API TEST WITH CYPRESS', () => {

  it('API Test-Status Validation', () => {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/35'
    })
      .then((response) => {
        expect(response.status).equal(200)
      });
  });

  it('API Test-validate Name value', () => {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/35'
    })
      .then((response) => {
        expect(response.body.name).equal('clefairy')
      });
  });

  it('API Test-validate Weight value', () => {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/35'
    })
      .then((response) => {
        expect(response.body.weight).equal(75)
      });
  });
})
