import Joi from 'joi';

export const validateCreateProduct = (product) => {
	const productSchema = Joi.object({
		name: Joi.string()
			.min(2)
			.required(),
		price: Joi.number()
			.integer()
			.required()
	});
	const result = productSchema.validate(product);
	if (result.error) {
		return {  type: false, message: result.error.details[0].message };
	}
	return true;
};
export const validateDeleteProduct = (product) => {
	const deleteProductSchema = Joi.object({
		id: Joi.number()
			.required()
	});
	const result = deleteProductSchema.validate(product);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};