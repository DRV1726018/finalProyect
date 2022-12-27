describe('API TEST WITH CYPRESS only using GET method', () => {
  const method = 'GET'
  const url = 'https://pokeapi.co/api/v2/pokemon/35'
  const statusOK = 200
  const pokemonName = 'clefairy'
  const pokemonWeight = 75

  it('API Test-Status OK Validation', () => {
    cy.request({
      method: method,
      url: url
    })
      .then((response) => {
        expect(response.status).equal(statusOK)
      });
  });

  it('API Test-validate Name value', () => {
    cy.request({
      method: method,
      url: url
    })
      .then((response) => {
        expect(response.body.name).equal(pokemonName)
      });
  });

  it('API Test-validate Weight value', () => {
    cy.request({
      method: method,
      url: url
    })
      .then((response) => {
        expect(response.body.weight).equal(pokemonWeight)
      });
  });
})
