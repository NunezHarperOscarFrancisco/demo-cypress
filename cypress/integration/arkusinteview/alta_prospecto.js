let user = "tec@dev.com"
let password = "1234"
let estado = "Activo"

let user_selector =":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > :nth-child(1) > .flex > .v-input > .v-input__control > .v-input__slot"
let password_selector = ":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > :nth-child(2) > .flex > .v-input > .v-input__control > .v-input__slot"
let login_button_selector = ":nth-child(2) > #inspire > .v-application--wrap > .layout.justify-center > .sm8 > .pa-2 > .v-card__text > .container > form > .v-card__actions > .ma-20"
let is_logged_selector = ".v-avatar > .v-responsive > .v-responsive__content"
let add_prospect_selector = ".gray"

let active = "Activo"
let nombre = "Cypress"
let especialidad = "Full Stack Developer"
let vacante = "Full Stack Developer"
let direccion = "cypress io"
let ciudad = "Tijuana"
let state = "Baja California"
let codigo_postal = "22440";
let país = "México"
let telefono = "01234567890"
let correo = "cypress@cypress.cypress"
let visa = "Si"
let cv = "http://drive.google.com/cypress"
let sueldo_actual = "9999"
let sueldo_desado = "20000"
let tiempo = "Matutino"
let hora_inicial = "9:00"
let hora_final = "11:00"
let pm = "PM"
let fecha = "2020-12-12"
let linkend = "https://www.linkedin.com/cypress"
let facebook = "https://www.facebook.com/cypress"
let whatsapp = "https://www.whatsapp.com/cypress"
let git = "https://www.github.com/cypress"
let tecnologia = "Git, .Net"
let informacion_adicional = "Es un script automatizado favor de borrar si ve este usuario"



let estado_selector = "form > :nth-child(2) > .v-input"
let nombre_selector = "#names"
let especialidad_selector = "form > :nth-child(4) > .v-input"
let vacante_selector = "form > :nth-child(5) > .v-input > .v-input__control"
let direccion_selector = "#address"
let ciudad_selector = ":nth-child(8) > .v-input > .v-input__control"
let state_selector = "form > :nth-child(9) > .v-input > .v-input__control"
let codigo_postal_selector = "#postalcode";
let país_selector = ":nth-child(11) > .layout > .v-input > .v-input__control"
let telefono_selector = "#phone"
let correo_selector = ".layout > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > #email"
let visa_selector = ".checkvisa > .v-input > .v-input__control"
let cv_selector = ":nth-child(6) > .layout > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > #cv"
let sueldo_actual_selector = ":nth-child(2) > .layout > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > #cv"
let sueldo_desado_selector = ".contact > :nth-child(3) > .layout > .v-input > .v-input__control"
let tiempo_selector = ".disp > .v-input > .v-input__control"
let hora_inicial_selector = ".textformhour > .layout > .v-input > .v-input__control"
let hora_final_selector = ".textformhour2 > .layout > .v-input > .v-input__control"
let pm_selector = ".disptime > .v-input > .v-input__control"
let fecha_selector = ".datepick > .v-input > .v-input__control"
let linkend_selector = "#linkemail"
let facebook_selector = "#facebook"
let whatsapp_selector = "#whatapp"
let git_selector = "#Git";
let tecnologia_selector = ".checkspecial > .v-input > .v-input__control";
let informacion_adicional_selector = ".importantinfo > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot"
let create_btn_selector = "#addprops > .v-btn"
describe('Prueba si se puede crear un prospecto', () => {
    
  it('Debe hacer iniciar sesion como reclutador', () => {
      cy.visit('http://localhost:8080/')
      cy.get(user_selector).type(user)
      cy.get(password_selector).type(password)
      cy.get(login_button_selector).click()
      cy.get(is_logged_selector).should('exist')
    })

    it('Debe llenar los campos de prospecto', () => {
      cy.get(add_prospect_selector).click()
      cy.get(estado_selector).type(estado+'{esc}')
      cy.get(nombre_selector).type(nombre)
      cy.get(especialidad_selector).type(especialidad+"{esc}")
      cy.get(vacante_selector).type(vacante+'{esc}')
      cy.get(direccion_selector).type(direccion)
      cy.get(ciudad_selector).type(ciudad+'{esc}')
      cy.get(state_selector).type(state+'{esc}')
      cy.get(codigo_postal_selector).type(codigo_postal)
      cy.get(país_selector).type(país+'{esc}')
      cy.get(telefono_selector).type(telefono)
      cy.get(correo_selector).type(correo)
      cy.get(visa_selector).type(visa+'{esc}')
      cy.get(cv_selector).type(cv)
      cy.get(sueldo_actual_selector).type(sueldo_actual)
      cy.get(sueldo_desado_selector).type(sueldo_desado)
      cy.get(tiempo_selector).type(tiempo+'{esc}')
      cy.get(hora_inicial_selector).type(hora_inicial)
      cy.get(hora_final_selector).type(hora_final)
      cy.get(pm_selector).type(pm+'{esc}')
      cy.get(linkend_selector).type(linkend)
      cy.get(facebook_selector).type(facebook)
      cy.get(whatsapp_selector).type(whatsapp)
      cy.get(git_selector).type(git)
      cy.get(tecnologia_selector).type(tecnologia)
      cy.get(informacion_adicional_selector).type(informacion_adicional)
      
    })
    it('API debe crear un nuevo prospecto', () => {
      cy.server()
      cy.route('POST',"/api/prospects/",{}).as('alta')
      cy.get(create_btn_selector).click()
      cy.wait("@alta").should('have.property','status','201')
    })
  })