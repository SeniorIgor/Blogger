import type { FormBase, FormBaseValidation, FormRules, FormSettings, FormState } from './useForm.types';

export const validateField = <T extends FormBase, K extends keyof T = keyof T>(
  rules: FormRules<T, K>,
  values: FormState<T>['values'],
  value: T[K],
): string => {
  const key = Object.keys(rules).find(
    (item) =>
      !(rules[item].validate as FormBaseValidation)(value, {
        ...values,
        [item]: value,
      }),
  );

  return key ? rules[key].message : '';
};

export const updateErrors = <T extends FormBase, K extends keyof T>(
  state: FormState<T>,
  name: K,
  value: T[K],
): FormState<T>['errors'] => {
  const message = validateField(state.rules[name], state.values, value);
  const updatedErrors = { ...state.errors };

  if (message) {
    updatedErrors[name] = message;
  } else {
    delete updatedErrors[name];
  }

  return updatedErrors;
};

export const initFormState = <T extends FormBase>(formSettings: FormSettings<T>): FormState<T> => {
  const preparedState: FormState<T> = Object.keys(formSettings).reduce(
    (prev, current: keyof T) => {
      const result: FormState<T> = { ...prev };

      result.values[current] = formSettings[current].value;
      result.rules[current] = { ...formSettings[current].rules };

      return result;
    },
    {
      isTouched: false,
      isValid: false,
      errors: {},
      rules: {},
      values: {},
      touched: {},
    } as FormState<T>,
  );

  const resultState = Object.keys(formSettings).reduce((prev, current: keyof T) => {
    const result: FormState<T> = { ...prev };

    result.errors[current] = validateField(result.rules[current], result.values, result.values[current]);

    return result;
  }, preparedState);

  return resultState;
};
