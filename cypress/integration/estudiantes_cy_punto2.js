describe('Los estudiantes busqueda de profesores', function() {
    it('Visita los estudiantes busca por texto', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Buscar en barra de búsqueda
		//Profesor: Mario Eduardo Sanchez Puccini - Ingeniería de Sistemas
		cy.get('.buscador').find('.Select').click()
		cy.get('.Select-input').find("input").type('Mario', { force: true })
		cy.get('.Select-menu-outer').contains('Mario Eduardo Sanchez Puccini').click()
    })
})
describe('Los estudiantes busqueda de profesores', function() {
    it('Visita los estudiantes busca por filtro sin cambiar orden', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Buscar por filtros
		cy.get('.uniandes').click()
		cy.get('.jsx-2021299586').find('select[id="sample_select"]').select('Ingeniería de Sistemas y Computación').should('have.value', 'universidad-de-los-andes,pregrado,ingenieria-de-sistemas-y-computación')
		cy.get('.profesores').find('div').first().find('a').click()
    })
})
describe('Los estudiantes busqueda de profesores', function() {
    it('Visita los estudiantes busca por filtro con cambiar orden', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Buscar por filtros
		cy.get('.uniandes').click()
		cy.get('.jsx-2021299586').find('select[id="sample_select"]').select('Ingeniería de Sistemas y Computación').should('have.value', 'universidad-de-los-andes,pregrado,ingenieria-de-sistemas-y-computación')
		cy.get('button').contains('Alfabético').click()
		cy.get('.profesores').find('div').first().find('a').click()	
		//Cuando se intenta cambiar el orden se queda pegado y no permite encontrar los profesores
    })
})