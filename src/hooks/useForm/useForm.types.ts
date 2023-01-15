import { FormEvent } from 'react';

import type { Actions } from './useForm.state';

export type FormValueVariant = string | number | boolean;

export type FormBase = Record<string, unknown>;

export type FormRules<T extends FormBase, K extends keyof T> = Record<
  string,
  {
    validate: (value: T[K], state?: FormState<T>['values']) => boolean;
    message: string;
  }
>;

export interface FormState<T extends FormBase> {
  isTouched: boolean;
  isValid: boolean;
  errors: {
    [K in keyof T]: string;
  };
  rules: { [K in keyof T]: FormRules<T, K> };
  values: {
    [K in keyof T]: T[K];
  };
  touched: {
    [K in keyof T]: boolean;
  };
  type?: Actions<T, keyof T>['type'];
}

export type FormBaseValidation = <T extends FormBase>(value: unknown, state?: FormState<T>['values']) => boolean;

export type FormSettings<T extends FormBase> = {
  [K in keyof T]: {
    rules?: FormRules<T, K>;
    value: T[K];
    relatedFields?: Array<Exclude<keyof T, K>>;
  };
};

export type UseFormProps<T extends FormBase> = FormSettings<T>;

export interface UseFormReturn<T extends FormBase> {
  formState: FormState<T>;
  changeField: <K extends keyof T>(name: K, value: T[K]) => void;
  handleSubmit: (onSubmit: (formState: T) => void) => (e: FormEvent) => void;
  resetForm: (settings: FormSettings<T>) => void;
}
