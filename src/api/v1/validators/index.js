import isNumberValidator from "./number/isNumberValidator.js";
import maxNumberValidator from "./number/maxNumberValidator.js";
import minNumberValidator from "./number/minNumberValidator.js";
import isStringValidator from "./string/isStringValidator.js";
import isArrayValidator from './array/isArrayValidator.js';
import isObjectValidator from './object/isObjectValidator.js';
import requiredValidator from './common/requiredValidator.js';
import minLengthValidator from './string/minLengthValidator.js';
import maxLengthValidator from './string/maxLengthValidator.js';
import isEmailValidator from './string/isEmailValidator.js';
import notNullValidator from './common/notNullValidator.js';
import isPasswordValidator from './string/isPasswordValidator.js';

const Validator = (key, value) => {
  const isString = () => isStringValidator(Validator, key, value);
  const isNumber = () => isNumberValidator(Validator, key, value);
  const minNumber = (minNumber) => minNumberValidator(Validator, key, value, minNumber)
  const maxNumber = (maxNumber) => maxNumberValidator(Validator, key, value, maxNumber)
  const isArray = () => isArrayValidator(Validator, key, value)
  const isObject = () => isObjectValidator(Validator, key, value)
  const required = () => requiredValidator(Validator, key, value)
  const minLength = (minLength) => minLengthValidator(Validator, key, value, minLength)
  const maxLength = (maxLength) => maxLengthValidator(Validator, key, value, maxLength)
  const isEmail = () => isEmailValidator(Validator, key, value)
  const notNull = () => notNullValidator(Validator, key, value)
  const isPassword = () => isPasswordValidator(Validator, key, value)

  return {
    isString,
    isNumber,
    isArray,
    isObject,
    required,
    minLength,
    maxLength,
    isEmail,
    notNull,
    isPassword,
    minNumber,
    maxNumber,
  };
};

export default Validator;
