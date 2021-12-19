import * as yup from 'yup';
import { uuid } from '..';

const listBlogByIdSchema = yup.object().shape({
  id: uuid('O id informado é inválido').required('O id é obrigatório'),
});

export { listBlogByIdSchema };
