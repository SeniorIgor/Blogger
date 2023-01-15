import { isMinLength, isNotEmpty } from '@/src/utils';

import { FormBaseValidation } from './useForm.types';

export const requiredValidator: FormBaseValidation = <T>(value: T) => isNotEmpty(value);

export const requiredStringValidator: FormBaseValidation = (value) =>
  typeof value === 'string' ? isNotEmpty(value) : false;

export const minLengthValidator =
  (minLength: number): FormBaseValidation =>
  (value) =>
    typeof value === 'string' ? isMinLength(minLength)(value) : false;

export const minValueValidator =
  (minValue: number): FormBaseValidation =>
  (value) =>
    typeof value === 'string' || typeof value === 'number' ? +value >= minValue : false;

export const maxValueValidator =
  (maxValue: number): FormBaseValidation =>
  (value) =>
    typeof value === 'string' || typeof value === 'number' ? +value <= maxValue : false;
