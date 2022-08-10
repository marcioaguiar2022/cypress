describe('Criar usuários', () => {

  const faker = require('faker-br');
  let nome = faker.name.firstName();
  let sobrenome = faker.name.firstName();
  let email = faker.internet.email();

  beforeEach(function () {
    cy.visit(Cypress.env('url'))
    cy.get(':nth-child(1) > .collapsible-header').click()
    cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
  })

  afterEach(() => {
    cy.screenshot()
    cy.delete_user()
  });



  it('com dados minímos', () => {
    cy.add_users_basic_info("0"+nome, sobrenome, email)
    cy.val_message_create_user()
    cy.val_user_name(nome)
    cy.val_user_email(email)
    cy.screenshot()
    cy.val_new_user_in_list(nome)

  })
})

describe('Editar dados de usuário', () => {

  const faker = require('faker-br');
  let nome = faker.name.firstName();
  let sobrenome = faker.name.firstName();
  let email = faker.internet.email();

  beforeEach(function () {
    cy.visit(Cypress.env('url'))
    cy.get(':nth-child(1) > .collapsible-header').click()
    cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
    cy.add_users_basic_info("0"+nome, sobrenome, email)
    cy.get('.red').click()
  })

  afterEach(() => {
    cy.screenshot()
    cy.get('.red').click()
    cy.delete_user()
  });
  it('complementar cadastro', () => {
    cy.screenshot()
    cy.edit_user()
    cy.val_message_edit_user()
    cy.val_edit_data()

  });
})

  describe('Excluir usuário', () => {

    const faker = require('faker-br');
    let nome = faker.name.firstName();
    let sobrenome = faker.name.firstName();
    let email = faker.internet.email();
  
    beforeEach(function () {
      cy.visit(Cypress.env('url'))
      cy.get(':nth-child(1) > .collapsible-header').click()
      cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
      cy.add_users_basic_info("0"+nome, sobrenome, email)
      cy.get('.red').click()
    })
  
    afterEach(() => {
      cy.screenshot()
      
    });
  it('Deletar cadastro', () => {
    cy.screenshot()
    cy.delete_user()
    cy.val_delete_message()
    cy.val_delete_data_dont_present(nome)
  });
})
