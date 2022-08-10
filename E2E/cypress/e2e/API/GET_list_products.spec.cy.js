
describe('API-list products', () => {

    let token;
    let id;
    let faker = require('faker-br');
    let nome = faker.name.firstName();
    let email = faker.internet.email();
    let administrador = "true";
    let password = "123456";
    let pass =
        faker.random.number({
            'min': 1,
            'max': 9000
        });
    let cod = pass.toString();

    beforeEach(() => {

    })
    afterEach(() => {
        cy.screenshot({ capture: 'fullPage'})
    })

    it('sucess - all', () => {

        cy.list_products_api(Cypress.env('url_api'), token).then((resp) => {

            expect(resp).property('status').to.equal(200)
            expect(resp).property('statusText').to.equal('OK')
            expect(resp.body).to.have.property('quantidade');
            expect(resp.body).to.have.property('produtos');
            expect(resp.body).property('quantidade').to.be.a('number');
            expect(resp.body).to.have.property('produtos').to.be.a('array');
            console.log(resp.body['produtos'])

        })


    })

})
