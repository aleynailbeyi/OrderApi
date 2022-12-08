/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import tokenTest from '../helpers/token.test';

chai.use(chaiHttp);
chai.should();
//let expect = chai.expect;
let tokenUser;
const id = 1;

describe('Baskets', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('alle@gmail.com', '123456');
	});
	it('should create orders', (done) => {
		chai.request(app)
			.post('/private/v1/basket/create')
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.send({
				'user_id': 1,
				'product_id': 1,
				'count': 1,
				'status': 1
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('message').eql('Sipariş oluşturuldu');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
	it('should add products in the basket', (done) => {
		chai.request(app)
			.post('/private/v1/basket/add')
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.send({
				'order_id': 1,
				'product_id': 1,
				'count': 2
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('message').eql('basarılı');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
	it('should delete product in the basket', (done) => {
		chai.request(app)
			.delete(`/private/v1/basket/delete/${id}`)
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('message').eql('Product is deleted in the basket');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
});