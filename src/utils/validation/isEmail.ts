import { StringValidator } from './validation.types';

const regexp = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;

const isEmail: StringValidator = (value) => regexp.test(value);

export default isEmail;
