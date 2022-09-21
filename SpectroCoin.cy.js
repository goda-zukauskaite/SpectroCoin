describe('Rate change', () => {
  it('Check if it is possitive', () => {
    cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html');
    cy.get('[id="currency-select"]').click();
    cy.get('[id="react-select-5-option-0"]').click();
    // Check first currency from the table - 1INCH
    cy.get(':nth-child(1) > :nth-child(3) > .MobileTable_percentageChange__l5lT_').should('not.contains.text', '-')
  })
})