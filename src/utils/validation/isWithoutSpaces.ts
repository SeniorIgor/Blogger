import { StringValidator } from './validation.types';

const isWithoutSpaces: StringValidator = (value) => /^\S+$/.test(value);

export default isWithoutSpaces;
