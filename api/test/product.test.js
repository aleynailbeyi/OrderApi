/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import tokenTest from '../helpers/token.test';

chai.use(chaiHttp);
chai.should();
let expect = chai.expect;
let tokenUser;
const id = 2;

describe('Products', () => {
	before(async () => {
		tokenUser = await tokenTest.getToken('alle@gmail.com', '123456');
	});
	it('should get products', (done) => {
		chai.request(app)
			.get('/private/v1/product/getProduct')
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.should.have.property('message').eql('Tüm ürünler getirildi.');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
	it('should add product', (done) => {
		chai.request(app)
			.post('/private/v1/product/productAdd')
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.send({
				'name': 'kiraz',
    			'price': '10'
			})
			.end((err, res) => {
				if (err) {
					done(err);
				}
				expect(res.body.data);
				res.body.should.have.property('message').eql('Ürün başarıyla eklendi.');
				res.body.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
	it('should product find by id', (done) => {
		chai.request(app)
			.get(`/private/v1/product/productFindById/${id}`)
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			//.query({id: id})
			.end((err, res) => {
	 	if (err) {
	 		done(err);
	 	}
				expect(res.body.data);
				res.body.should.have.property('message').eql('Ürün id ye göre bulundu.');
				res.body.should.be.a('object');
		 		res.body.should.have.property('type').eql(true);
				done();
			});
	});
	it('should delete product', (done) => {
		chai.request(app)
			.delete(`/private/v1/product/deleteProduct/${id}`)
			.set('language', 'tr')
			.set('Authorization', tokenUser)
			.end((err, res) => {
	 	if (err) {
	 		done(err);
	 	}
				res.body.should.have.property('message').eql('Ürün silindi');
				res.body.should.be.a('object');
		 		res.body.should.have.property('type').eql(true);
				done();
			});
	});
	 
});