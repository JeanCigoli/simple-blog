import * as yup from 'yup';
import { link, section, string, uuid } from '..';

const createBlogSchema = yup.object().shape({
  title: string('O título')
    .max(50, 'O título não pode ter mais de 50 caracteres')
    .required('O título é obrigatória'),
  shortDescription: string('A descrição', 15)
    .max(200, 'A descrição não pode ter mais de 200 caracteres')
    .required('A descrição é obrigatória'),
  author: string('O título')
    .max(70, 'O nome do autor não pode ter mais de 70 caracteres')
    .required('O título é obrigatória'),
  authorPhoto: link.notRequired().nullable(true),
  categories: yup
    .array()
    .of(uuid('A categoria está sendo informada incorretamente'))
    .min(1, 'É preciso informar ao menos uma categoria')
    .max(3, 'Uma publicação não pode ter mais de três categorias')
    .required('É obrigatório informar as categorias'),
  sections: yup
    .array()
    .of(section)
    .min(1, 'É preciso informar ao menos uma seção')
    .max(5, 'Uma publicação não pode ter mais de cinco seções')
    .required('É obrigatório informar as seções'),
});

export { createBlogSchema };
