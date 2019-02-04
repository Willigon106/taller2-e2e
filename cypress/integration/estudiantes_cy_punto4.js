describe('Los estudiantes en página de profesor filtra por materias', function() {
    it('Visita los estudiantes abre página de profesor filtra materias por nombre', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Filtrar por materias en página de profesor por nombre
		cy.get('.buscador').find('.Select').click()
		cy.get('.Select-input').find("input").type('Mario', { force: true })
		cy.wait(2000)
		cy.get('.Select-menu-outer').contains('Mario Eduardo Sanchez Puccini').click()
		cy.get('.materias').find('div').find('label').contains('Arquitectura Empresarial').prev().click()
		cy.wait(1500)
		cy.get('.materias').find('div').find('label').contains('Algoritmica Y Progr').prev().click()
		cy.wait(2000)
    })
})
describe('Los estudiantes en página de profesor filtra por materias', function() {
    it('Visita los estudiantes abre página de profesor filtra materias por id', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Filtrar por materias en página de profesor por id de materia
		cy.get('.buscador').find('.Select').click()
		cy.get('.Select-input').find("input").type('Mario', { force: true })
		cy.wait(2000)
		cy.get('.Select-menu-outer').contains('Mario Eduardo Sanchez Puccini').click()
		cy.get('.materias').find('div').find('label').find('input[name="id:ISIS1207"]').click() //Alg. Y Progr. Obj. I
		cy.wait(1500)
		cy.get('.materias').find('div').find('label').find('input[name="id:ISIS1001"]').click() //Introd. Ingenieria De Sistemas
		cy.wait(2000)
    })
})