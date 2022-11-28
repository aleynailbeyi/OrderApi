import Joi from 'joi';

export const validateAddProduct = (addPro) => {
	const AddProductSchema = Joi.object({
		order_id: Joi.number()
			.required(),
		product_id: Joi.number()
			.required(),
		count: Joi.number()
			.required()
	});
	const result = AddProductSchema.validate(addPro);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};
export const validateDeleteProduct = (deletePro) => {
	const AddProductSchema = Joi.object({
		id: Joi.number()
			.required(),
		order_id: Joi.number()
			.required()
	});
	const result = AddProductSchema.validate(deletePro);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};