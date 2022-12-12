import db from '../src/models';

// eslint-disable-next-line no-undef
exports.roleBase = function (permission_id) {
	return async function (req, res, next) {
		try {
			const user = await db.users.findOne({
				where: {
					id: req.params.id
				},
				include: {
					model: db.roles,
					required: true,
					through: {
						attributes: []
					},
					include: {
						model: db.permissions,
						where: {
							id: permission_id
						},
						required: true,
						attributes: []
					}
				}
			});
			
			console.log(JSON.parse(JSON.stringify(user)));
			if (user){
				next();
			}
			else {
				return res.status(401).json('You dont have permission!');
			}

		}
		catch (error) {
			throw error;
		}
	};

};