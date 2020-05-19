

describe('Invalid login test', () => {
    it('Go to login page', () => {
        const user = "te@dev.com"
        const password = "1234"
        const alert_msg = "Usuario y/o contraseña inválido"
        var fail_msg = "aaa"
        cy.server()
        cy.route('POST',"/api/auth/login",{}).as('login')

        cy.on('window:alert', str => {
            fail_msg = str
        })
        cy.visit('http://localhost:8080/')

        cy.get(":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > :nth-child(1) > .flex > .v-input > .v-input__control > .v-input__slot").type(user)
        cy.get(":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > :nth-child(2) > .flex > .v-input > .v-input__control > .v-input__slot").type(password)

        cy.get(":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > .v-card__actions > .ma-20").click()

        cy.wait("@login")
        .then(()=>{
            expect(fail_msg).to.equal(alert_msg)
        })

    })
  })