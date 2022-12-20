describe('API TEST WITH CYPRESS', () => {
  it('API Test-Status Validation', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('status').should('equal', 200)
  })

  it('API Test-validate Name value', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('body').should('include', { name: 'ditto' })
  })
})