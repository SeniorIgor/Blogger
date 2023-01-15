import type { FormBase, FormSettings, FormState } from './useForm.types';
import { initFormState, updateErrors } from './useForm.utils';

export type Actions<T extends FormBase, K extends keyof T> =
  | { type: 'UPDATE_FIELD'; payload: { name: K; value: T[K]; settings: FormSettings<T> } }
  | { type: 'VALIDATE_ALL' }
  | { type: 'RESET_FORM'; payload: { settings: FormSettings<T> } };

const reducer = <T extends FormBase>(state: FormState<T>, action: Actions<T, keyof T>): FormState<T> => {
  switch (action.type) {
    case 'UPDATE_FIELD': {
      const { name, value, settings } = action.payload;

      if (Object.hasOwnProperty.call(state.values, name)) {
        const { relatedFields = [] } = settings[name];

        const fields = [name, ...relatedFields];
        const newState: FormState<T> = {
          ...state,
          values: { ...state.values, [name]: value },
          touched: { ...state.touched, [name]: true },
        };

        const errors = fields?.reduce(
          (prev: Record<keyof T, string>, current: keyof T) =>
            updateErrors({ ...newState, errors: prev }, current, newState.values[current]),
          newState.errors,
        );

        return { ...newState, errors, type: action.type };
      }

      return { ...state, type: action.type };
    }

    case 'VALIDATE_ALL': {
      const errors = Object.keys(state.values).reduce(
        (prev: Record<keyof T, string>, current: keyof T) =>
          updateErrors({ ...state, errors: prev }, current, state.values[current]),
        state.errors,
      );

      const isValid = Object.keys(errors).every((key) => typeof errors[key] !== 'undefined' && errors[key] === '');

      return { ...state, errors, isValid, isTouched: true, type: action.type };
    }

    case 'RESET_FORM': {
      const { settings } = action.payload;

      return {
        ...state,
        ...initFormState(settings),
        type: action.type,
      };
    }

    default:
      return state;
  }
};

export default reducer;
