import Joi from 'joi';

export const validateCompleteOrder = (order) => {
	const OrderSchema = Joi.object({
		order_id: Joi.number()
			.required()
	});
	const result = OrderSchema.validate(order);
	if (result.error) {
		return { message: result.error.details[0].message, type: false };
	}
	return true;
};