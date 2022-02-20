const isNumberValidator = (Validator, key, value) => {
	if (typeof value !== "number") {
		throw { message: `${key} is not a number!` };
	}
	return Validator(key, value);
};

export default isNumberValidator