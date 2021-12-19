import * as yup from 'yup';

export const string = (field: string, min = 3) =>
  yup
    .string()
    .nullable(true)
    .min(min, `${field} tem que ter no mínimo ${min} caracteres`);

export const uuid = (message: string) => yup.string().uuid(message);

export const link = yup
  .string()
  .matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'O link informado está incorreto',
  )
  .max(200, 'O link não pode passar de 200 caracteres');

export const section = yup.object().shape({
  title: string('O título')
    .max(70, 'O título não pode ter mais de 70 caracteres')
    .notRequired()
    .nullable(true),
  image: link.notRequired().nullable(true),
  text: string('O texto da seção', 50).required(
    'O texto da seção é obrigatório',
  ),
});
