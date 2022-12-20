/* eslint-disable no-undef */
import chai from 'chai';
import app from '../index';
import chaiHttp from 'chai-http';
import tokenTest from '../helpers/token.test';

chai.use(chaiHttp);
chai.should();
let tokenUser;

describe('Products with User', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('alle@gmail.com', '123456');
	});
	it('should not allow a user without add product permission to add a product', (done) => {
		chai.request(app)
			.post('/private/v1/product/productAdd')
			.set('Authorization', tokenUser)
			.send({
				'user_id': '2',
				'name': 'kiraz',
				'price': '10'
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('type').eql(true);
				res.body.should.have.property('message').eql('Ürün başarıyla eklendi.');
				res.body.should.be.a('object');
				done();
			});
	});
});