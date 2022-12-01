/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();
let expect = chai.expect;

describe('Create User', () => {
  
	it('should create user', (done) => {
		chai.request(app)
	 		.post('/public/v1/auth/register')
	 		.set('language', 'tr')
	 		.send({
				'name': 'aley',
				'lastname': 'il',
				'email': 'alle@gmail.com',
				'password': '123456'
			})
	 		.end((err, res) => {
				if (err) {
					done(err);
				}
				res.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
});

describe('Login User', () => {
	it('should login user', (done) => {
		chai.request(app)
	 		.post('/public/v1/auth/login')
	 		.set('language', 'tr')
	 		.send({
				'email': 'alle@gmail.com',
    			'password': '123456'
			})
	 		.end((err, res) => {
				if (err) {
					done(err);
				}
				expect(res.body.data);
				res.should.have.status(200);
				res.body.should.have.property('message').eql('Başarılı giriş.');
				res.should.be.a('object');
				res.body.should.have.property('type').eql(true);
				done();
			});
	});
});