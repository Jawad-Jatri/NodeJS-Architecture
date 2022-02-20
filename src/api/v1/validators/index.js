import isNumberValidator from "./number/isNumberValidator";
import maxNumberValidator from "./number/maxNumberValidator";
import minNumberValidator from "./number/minNumberValidator";
import isStringValidator from "./string/isStringValidator";
import isArrayValidator from './array/isArrayValidator';
import isObjectValidator from './object/isObjectValidator';
import requiredValidator from './common/requiredValidator';
import minLengthValidator from './string/minLengthValidator';
import maxLengthValidator from './string/maxLengthValidator';
import isEmailValidator from './string/isEmailValidator';
import notNullValidator from './common/notNullValidator';
import isPasswordValidator from './string/isPasswordValidator';

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
