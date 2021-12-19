import * as yup from 'yup';

const listAllBlogsSchema = yup.object().shape({
  page: yup
    .number()
    .min(1, 'A página não pode ser menor que o 1')
    .required('A pagina é obrigatória'),
  limit: yup
    .number()
    .min(2, 'O limite não pode ser menor que o 2')
    .required('O limite é obrigatório'),
});

export { listAllBlogsSchema };
