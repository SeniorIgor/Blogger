import { StringValidator } from './validation.types';

const isMaxLength =
  (minLength: number): StringValidator =>
  (value) =>
    value.length <= minLength;

export default isMaxLength;
