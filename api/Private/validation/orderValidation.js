import Joi from 'joi';

export const validateCompleteOrder = (order) => {
	const OrderSchema = Joi.object({
		order_id: Joi.number()
			.integer()
			.required()
	});
	const result = OrderSchema.validate(order);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};
export const validateDeleteOrder = (order) => {
	const OrderSchema = Joi.object({
		id: Joi.number()
			.required(), 
		order_id: Joi.number()
			.integer()
			.required()
	});
	const result = OrderSchema.validate(order);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};