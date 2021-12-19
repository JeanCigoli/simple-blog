# Blog - API

Essa API faz parte de um desafio onde era preciso criar as seguintes etapas:

- A listagem dos posts
- O detalhe de cada post:
  - Informações de título, descrição, autor e categorias
- Adicionar novos posts
- Editar post
- Excluir post

Para facilitar o entendimento foi criado uma documentação:

> https://blog-docs.vercel.app

## O que foi utilizado?

### Deploy

O banco de dados está no **RDS** da AWS, e a API está no **EC2** rodando através do **docker**.

### Princípios

- Single Responsibility Principle (SRP)
- Dependency Inversion Principle (DIP)
- Keep It Simple, Silly (KISS)
- Small Commits
- Liskov Substitution Principle (LSP)

### Design Patterns

- Factory
- Adapter
- Dependency Injection

### Metodologias e Designs

- Clean Architecture
- Conventional Commits
- Use Cases

### Bibliotecas e Ferramentas

- NPM and YARN
- Typescript
- Git
- Express
- Yup
- Husky
- Lint Staged
- Eslint
- Rimraf
- Knex
- Mysql2

### Features do Node

- API Rest com Express
- CORS
- Middlewares
