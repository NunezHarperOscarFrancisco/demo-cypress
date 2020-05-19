let user = "tec@dev.com"
let password = "1234"
describe('Valid login test', () => {
    it('Go to login page', () => {
      cy.visit('http://localhost:8080/')
      cy.get(":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > :nth-child(1) > .flex > .v-input > .v-input__control > .v-input__slot").type(user)
      cy.get(":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > :nth-child(2) > .flex > .v-input > .v-input__control > .v-input__slot").type(password)
      cy.get(":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > .v-card__actions > .ma-20").click()
      cy.get(".v-avatar > .v-responsive > .v-responsive__content").should('exist')
    })
  })