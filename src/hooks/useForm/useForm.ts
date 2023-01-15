import { FormEvent, Reducer, useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import reducer, { Actions } from './useForm.state';
import { FormBase, FormSettings, FormState, UseFormProps, UseFormReturn } from './useForm.types';
import { initFormState } from './useForm.utils';

/**
 * Занимается валидацией полей формы
 *
 * @param formSettings - Объект с настройками полей формы и их валидации
 * @param formSettings.[field_name].rules - Набор правил для валидации поля
 * @param formSettings.[field_name].value - Значение по умолчанию
 * @param formSettings.[field_name].relatedFields - Названия зависимых полей (при изменении
 * текущего поля, будут запускаться валидации зависимых полей)
 *
 * @returns result - Состояние и набор методов
 * @returns result.formState - Состояние формы (содержит значения полей, ошибки формы)
 * @returns result.changeField - Callback вызывается при изменении значения поля
 * @returns result.handleSubmit - Callback вызывается при отправке формы
 */
export const useForm = <T extends FormBase>(formSettings: UseFormProps<T>): UseFormReturn<T> => {
  const [state, dispatch] = useReducer<Reducer<FormState<T>, Actions<T, keyof T>>>(
    reducer,
    initFormState(formSettings),
  );

  const onSubmitHandler = useRef<(formState: T) => void>();

  const changeField = useCallback(
    <K extends keyof T>(name: K, value: T[K]) =>
      dispatch({ type: 'UPDATE_FIELD', payload: { name, value, settings: formSettings } }),
    [formSettings],
  );

  const handleSubmit = useCallback(
    (onSubmit: (formState: T) => void) => (event: FormEvent) => {
      event.preventDefault();
      onSubmitHandler.current = onSubmit;

      dispatch({ type: 'VALIDATE_ALL' });
    },
    [],
  );

  const resetForm = useCallback((settings: FormSettings<T>) => {
    dispatch({ type: 'RESET_FORM', payload: { settings } });
  }, []);

  useEffect(() => {
    if (state.type === 'VALIDATE_ALL' && onSubmitHandler.current && state.isValid) {
      onSubmitHandler.current(state.values);
      onSubmitHandler.current = undefined;
    }
  }, [state]);

  const result: UseFormReturn<T> = useMemo(
    () => ({ formState: state, changeField, handleSubmit, resetForm }),
    [state, changeField, handleSubmit, resetForm],
  );

  return result;
};

export * from './useForm.types';
export * from './useForm.validators';
