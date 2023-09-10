const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server/server'); // Adjust this path if necessary

chai.use(chaiHttp);
const { expect } = chai;

describe('Server', () => {
  describe('GET /', () => {
    it('should return package.json data', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('name');
          expect(res.body).to.have.property('version');
          expect(res.body).to.have.property('description');
          done();
        });
    });
  });
});
