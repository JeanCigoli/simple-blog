import * as yup from 'yup';
import { string } from '..';

const createCategorySchema = yup.object().shape({
  name: string('A categoria').required('A categoria é obrigatória'),
});

export { createCategorySchema };
