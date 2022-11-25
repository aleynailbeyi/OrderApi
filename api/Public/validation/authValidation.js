import Joi from 'joi';

export const validateRegister = (user) => {
	const registerSchema = Joi.object({
		name: Joi.string()
			.min(2)
			.max(30)
			.required(),
		lastname: Joi.string()
			.min(1)
			.max(30)
			.required(),
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] } })
			.required(),
		password: Joi.string()
			.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
			.required()
	});
	const result = registerSchema.validate(user);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};
export const validateLogin = (user) => {
	const loginSchema = Joi.object({
		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] } })
			.required(),
		password: Joi.string()
			.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
			.required()
	});
	const result = loginSchema.validate(user);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};