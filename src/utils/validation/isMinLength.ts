import { StringValidator } from './validation.types';

const isMinLength =
  (minLength: number): StringValidator =>
  (value) =>
    value.length >= minLength;

export default isMinLength;
