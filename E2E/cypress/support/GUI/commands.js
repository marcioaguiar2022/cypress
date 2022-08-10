

//Inclusão
Cypress.Commands.add('add_users_basic_info', (nome, sobrenome, email) => {

cy.get('.waves-light').click()
cy.get('#user_name').type(`${nome}`)
cy.get('#user_lastname').type(sobrenome)
cy.get('#user_email').type(email)
cy.get('.actions > input').click()
})

Cypress.Commands.add("val_message_create_user", () => {
    cy.get('.row.center')
      .contains('Usuário Criado com sucesso')
      .should('be.visible')
      .then($button => {
        $button.css('border', '1px solid magenta')
      })
})

Cypress.Commands.add("val_user_name", (nome) =>{
    cy.get(':nth-child(3) > .col > :nth-child(1)')
      .contains(nome)
      .should('be.visible')
      .then($button => {
        $button.css('border', '1px solid magenta')
      })
})

Cypress.Commands.add("val_user_email",(email) =>{
    cy.get(':nth-child(3) > .col > :nth-child(3)')
      .contains(email)
      .should('be.visible')
      .then($button => {
        $button.css('border', '1px solid magenta')
      })
     })
Cypress.Commands.add("val_new_user_in_list",(nome)=>{
    cy.get('.red').click()
    cy.get('h5.center', { timeout: 10000 })
      .contains('Lista de Usuários!!')
      .should('be.visible');
    cy.get('tbody tr:nth-child(1) td:nth-child(1)').contains(nome)
      .then($button => {
        $button.css('border', '1px solid magenta')
      })
})

//Alteração


Cypress.Commands.add("edit_user",()=>{
    cy.get('a.material-icons[href*="/edit"]')
      .eq(0)
      .then($button => {
        $button.css('border', '1px solid magenta')
      }).click()
    cy.fixture("users.json").then((users) => {
      cy.get('#user_address').type(users.endereco);
      cy.get('#user_university').type(users.universidade);
      cy.get('#user_profile').type(users.profissao);
      cy.get('#user_gender').type(users.genero);
      cy.get('#user_age').type(users.idade);
    });

    cy.get('input[value="Criar"]').click()
})


Cypress.Commands.add("val_message_edit_user",()=>{
    cy.get('p#notice.light-green.accent-2').contains("Seu Usuário foi Atualizado!")
      .then($button => {
        $button.css('border', '1px solid magenta')
      })
})

Cypress.Commands.add("val_edit_data",()=>{
    cy.fixture("users.json").then((users) => {
        cy.get('.col.s12.center p').eq(3)
          .then($button => {
            $button.css('border', '1px solid magenta')
          })
          .contains(users.universidade)
        cy.get('.col.s12.center p').eq(4)
          .then($button => {
            $button.css('border', '1px solid magenta')
          })
          .contains(users.genero)
        cy.get('.col.s12.center p').eq(5)
          .then($button => {
            $button.css('border', '1px solid magenta')
          })
          .contains(users.profissao)
        cy.get('.col.s12.center p').eq(6)
          .then($button => {
            $button.css('border', '1px solid magenta')
          })
          .contains(users.idade)
        cy.get('.col.s12.center p').eq(7)
          .then($button => {
            $button.css('border', '1px solid magenta')
          })
          .contains(users.endereco)
      })
})

//deletar
Cypress.Commands.add("delete_user",()=>{
cy.get('a[data-confirm="Vocee está certo disso?"]').eq(0).then($button => {
    $button.css('border', '1px solid magenta')
  })
    .click()
})

Cypress.Commands.add("val_delete_message",()=>{
    cy.get('p#notice').contains("Seu Usuário foi removido com sucesso!")
    .then($button => {
      $button.css('border', '1px solid magenta')
    })

})

Cypress.Commands.add("val_delete_data_dont_present",(nome)=>{
    cy.get('tbody tr:nth-child(1) td:nth-child(1)').then($button => {
        $button.css('border', '1px solid magenta')
      }).contains(nome).should('not.exist')
  

})