/**
 * Проверяет является ли значение пустым массивом
 *
 * @param value - Значение для проверки
 *
 * @returns - `true` если `value` - не пустой массив, иначе `false`.
 */
export const isNotEmptyArray = <T>(value: unknown): value is Array<T> => Boolean((value as Array<T>)?.length);

/**
 * Проверяет является ли значение "правдивым"
 *
 * @param value - Значение для проверки
 *
 * @returns - `true` если значение "правдивое", `false` - "ложное".
 */
export const isTruthyType = <T>(value?: T): value is T => Boolean(value);

/**
 * Проверяет является ли значение null или undefined
 *
 * @param value - Значение для проверки
 *
 * @returns - `true` если `value` не `null` и не `undefined`.
 */
export const isNotNullOrUndefined = <T>(value?: T): value is T => value !== null && value !== undefined;

/**
 * Типизированная приведение к boolean типу
 *
 * @param value Значение для проверки
 *
 * @returns - результат приведения
 */
export const isNotEmpty = <T>(value?: T): boolean => Boolean(value);
