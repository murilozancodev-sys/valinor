# :rocket: Desafio Kanban - Field

Sistema Kanban full-stack desenvolvido como desafio técnico, utilizando **NestJS** no backend e **Angular (standalone components)** no frontend.

O objetivo do projeto foi construir uma aplicação organizada, escalável e com boas práticas, focando na modelagem do domínio e nas regras de negócio de um sistema de gerenciamento de tarefas baseado em colunas.

---

## :pushpin: Visão Geral

A aplicação permite:

- Criar cards
- Mover cards entre colunas
- Remover cards
- Validar entradas via DTOs
- Garantir integridade das regras de negócio
- Executar testes unitários no backend

O foco principal foi a organização da arquitetura e a clareza do código, priorizando separação de responsabilidades e boas práticas.

---

## :movie_camera: Vídeo de Apresentação

https://www.loom.com/share/81972096f20c46d19ed7aa1022a7bb15

---

## :brain: Decisões Técnicas

### :small_blue_diamond: Backend — NestJS

Escolhi o **NestJS** por sua arquitetura modular, forte integração com TypeScript e suporte nativo a:

- Injeção de dependência
- DTOs
- Pipes de validação
- Exceptions padronizadas
- Testes com Jest

A estrutura foi organizada por módulos, separando claramente:

- Domínio de Boards
- Domínio de Cards
- Camada de Serviço (regras de negócio)
- Camada de Controller (entrada HTTP)

Foram utilizados:

- `class-validator` para validação
- `ValidationPipe` global
- `NotFoundException` e `BadRequestException` para tratamento adequado de erros

---

### :small_blue_diamond: Frontend — Angular

O frontend foi desenvolvido com:

- Angular standalone components
- Separação em componentes (App e Board)
- Data binding com `ngModel`
- Comunicação via serviços HTTP

O foco foi manter o frontend simples, funcional e organizado, garantindo:

- Renderização dinâmica das colunas
- Atualização correta após ações
- Layout inspirado em ferramentas Kanban modernas

---

## :test_tube: Testes

O backend possui testes unitários utilizando **Jest**, cobrindo:

- Criação de card
- Movimentação de card
- Tratamento de board inexistente
- Regras de negócio principais

Para rodar os testes:

- cd backend
- npm install
- npm run test

## :arrow_forward: Como Executar o Projeto

- Backend:

cd backend
npm install
npm run start:dev

- Servidor rodando em:
http://localhost:3000

- Frontend:

cd frontend
npm install
ng serve
Aplicação disponível em:
http://localhost:4200


## :construction_site: Estrutura do Projeto

backend/
  ├── boards/
  ├── cards/
  ├── dto/
  └── tests/

frontend/
  ├── board/
  ├── services/
  └── app.component
  
A estrutura foi pensada para facilitar manutenção futura e escalabilidade.

## :mag_right: Possíveis Melhorias Futuras

Com mais tempo, seriam adicionadas:

- Persistência com banco de dados (PostgreSQL)

- Autenticação com JWT

- Proteção de rotas no frontend

- Deploy completo em ambiente cloud

- Testes e2e

- Drag and drop entre colunas

A arquitetura atual já permite essas evoluções sem grandes refatorações.



## :man_technologist: Sobre o Autor
Murilo Zanco Fria

Assistente de logística em transição para desenvolvimento de software, atualmente cursando Análise e Desenvolvimento de Sistemas (UNINTER), com polo em São José do Rio preto.
Possuo 
Tenho interesse em backend, arquitetura de software e segurança da informação.

:link: LinkedIn: https://www.linkedin.com/in/murilo-zanco-5b1957371/
:computer: GitHub: https://github.com/murilozancodev-sys



## :dart: Considerações Finais
O foco deste projeto foi demonstrar:

- Organização de código

- Clareza arquitetural

- Uso correto das boas práticas
