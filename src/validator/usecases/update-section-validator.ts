import * as yup from 'yup';
import { link, string, uuid } from '..';

const updateSectionSchema = yup.object().shape({
  title: string('O título')
    .max(70, 'O título não pode ter mais de 70 caracteres')
    .notRequired()
    .nullable(true),
  image: link.notRequired().nullable(true),
  text: string('O texto da seção', 50).required(
    'O texto da seção é obrigatório',
  ),
  sectionId: uuid('O código da seção está incorreto').required(
    'O código da seção é obrigatório',
  ),
  blogId: uuid('O código da publicação está incorreto').required(
    'O código da publicação é obrigatório',
  ),
});

export { updateSectionSchema };
