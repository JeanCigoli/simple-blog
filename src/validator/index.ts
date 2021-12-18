import * as yup from 'yup';

export const string = (field: string) =>
  yup
    .string()
    .nullable(true)
    .min(3, `${field} tem que ter no mínimo 3 caracteres`);
