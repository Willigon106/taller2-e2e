describe('Los estudiantes crear cuenta', function() {
    it('Visita los estudiantes y crea nueva cuenta', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Crear una nueva cuenta
		cy.contains('Ingresar').click()
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("William")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("González")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("wgpruebasautomaticas@gmail.com")
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación').should('have.value', '12')
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("12341234")
		cy.get('.cajaSignUp').find('input[name="acepta"]').click()
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.contains('Registro exitoso')
    })
})
describe('Los estudiantes login', function() {
    it('Visita los estudiantes y accede correctamente', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Login Correcto
		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("willigon106@gmail.com")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("12341234")
		cy.get('.cajaLogIn').contains('Ingresar').click()
    })
})
describe('Los estudiantes crear cuenta', function() {
    it('Visita los estudiantes e intenta crear una cuenta que ya existe', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Crear una cuenta ya existente
		cy.contains('Ingresar').click()
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pepito")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Perez")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("wgpruebasautomaticas@gmail.com")
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación').should('have.value', '12')
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
		cy.get('.cajaSignUp').find('input[name="acepta"]').click()
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.contains('Ya existe un usuario registrado con el correo')
    })
})