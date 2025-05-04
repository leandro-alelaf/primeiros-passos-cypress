describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  cy.get( 'input[name="username"]').type("Admin")
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
  cy.get('.oxd-button').click() 
  cy.get(':nth-child(9) > .oxd-main-menu-item').click()
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
  cy.get(':nth-child(6) > .oxd-sheet > .orangehrm-profile-picture > .orangehrm-profile-picture-img').click()
 
  })
})