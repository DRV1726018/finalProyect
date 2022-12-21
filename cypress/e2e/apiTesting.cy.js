describe('API TEST WITH CYPRESS only using GET method', () => {
  let method = 'GET'
  let url = 'https://pokeapi.co/api/v2/pokemon/35'
  let statusOK = 200
  let pokemonName = 'clefairy'
  let pokemonWeight = 75

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
