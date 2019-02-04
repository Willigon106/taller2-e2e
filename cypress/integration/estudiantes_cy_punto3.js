describe('Los estudiantes abrir página de profesor', function() {
    it('Visita los estudiantes abre página de profesor por buscador', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Abrir página de profesor por barra de búsqueda
		//Profesor: Mario Eduardo Sanchez Puccini - Ingeniería de Sistemas
		cy.get('.buscador').find('.Select').click()
		cy.get('.Select-input').find("input").type('Mario', { force: true })
		cy.wait(2000)
		cy.get('.Select-menu-outer').contains('Mario Eduardo Sanchez Puccini').click()
		cy.wait(3000)
    })
})
describe('Los estudiantes abrir página de profesor', function() {
    it('Visita los estudiantes abre página de profesor por filtro', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Abrir página de profesor específico por filtro
		cy.get('.uniandes').click()
		cy.get('.jsx-2021299586').find('select[id="sample_select"]').select('Ingeniería de Sistemas y Computación').should('have.value', 'universidad-de-los-andes,pregrado,ingenieria-de-sistemas-y-computación')
		cy.get('button').contains('Alfabético').click()
		cy.wait(2000)
		cy.get('button').contains('Cargar más').click().wait(2000)
		cy.get('button').contains('Cargar más').click().wait(2000)
		cy.get('.profesores').find('div').find('a').contains('Mario Eduardo Sanchez Puccini').wait(2000).click()
		cy.wait(3000)
    })
})
describe('Los estudiantes abrir página de profesor', function() {
    it('Visita los estudiantes abre página de profesor por filtro aleatoriamente primer dato', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Abrir página de profesor por filtro primer dato mostrado
		cy.get('.uniandes').click()
		cy.get('.jsx-2021299586').find('select[id="sample_select"]').select('Arquitectura').should('have.value', 'universidad-de-los-andes,pregrado,arquitectura')
		cy.get('button').contains('Alfabético').click()
		cy.wait(2000)
		cy.get('.profesores').find('div').first().find('a').click()
		cy.wait(3000)
    })
})