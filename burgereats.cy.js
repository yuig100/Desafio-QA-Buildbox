import 'cypress-file-upload';
describe('empty spec', () => {
    it('cadastro no burger eats', () => {

      //Pagina inicial
      cy.visit('https://buger-eats.vercel.app/')
      cy.get('a').click()

      //Preenchendo o formulario
      cy.get('[name=name]').type('Pedro Teste')
      cy.get('[name=cpf]').type('89970028057')
      cy.get('[name=email]').type('teste@hotmail.com')
      cy.get('[name=whatsapp]').type('12345678910')
      cy.get('[name=postalcode]').type('25931322')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
      cy.get('[name=address-number]').type('139')
      cy.get('[name=address-details]').type('sem detalhes')

      //Escolhendo as categorias
      cy.get('.delivery-method > :nth-child(2)').click()

      //Upload da Imagem
      cy.get('[class=dropzone]').selectFile("cypress/fixtures/CNH.jpeg", { action: 'drag-drop' })

      
      cy.server();
      cy.route('POST', '**/eats').as('postEats');

      //Botões de confirmação
      cy.get('[class=button-success]').click()
      cy.get('.swal2-confirm').click()
       
  })
})