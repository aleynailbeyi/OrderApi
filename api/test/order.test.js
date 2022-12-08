/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import tokenTest from '../helpers/token.test';

chai.use(chaiHttp);
chai.should();
let expect = chai.expect;
let tokenUser;
const id = 1;

describe('Orders', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('alle@gmail.com', '123456');
	});
	it('should get orders', (done) => {
		chai.request(app)
			.get('/private/v1/order/get')
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				expect(res.body.data);
				res.body.should.have.property('message').eql('Tüm siparişler getirildi.');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
	it('should orders find by id', (done) => {
		chai.request(app)
			.get(`/private/v1/order/getOrderFindById/${id}`)
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				expect(res.body.data);
				res.body.should.have.property('message').eql('Sipariş id ye göre bulundu.');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
	it('should delete order', (done) => {
		chai.request(app)
			.delete(`/private/v1/order/deleteOrder/${id}`)
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('message').eql('status basket');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(false);
				done();
			});
	});
	it('should complete orders', (done) => {
		chai.request(app)
			.post('/private/v1/order/complete')
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.send({
				'order_id': id
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('message').eql('Sipariş başarıyla tamamlandı.');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});

	it('should delete order by id', (done) => {
		chai.request(app)
			.delete(`/private/v1/order/deleteOrder/${id}`)
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('message').eql('order is deleted');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});

});