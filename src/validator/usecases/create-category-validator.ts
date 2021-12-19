import * as yup from 'yup';
import { string } from '..';

const createCategorySchema = yup.object().shape({
  name: string('A categoria')
    .max(50, 'A categoria não pode ter mais de 50 caracteres')
    .required('A categoria é obrigatória'),
});

export { createCategorySchema };
