<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

## Description

Courses API developed using [Nest](https://github.com/nestjs/nest) Framework

## Installation

```bash
$ npm install
$ npx typeorm migrate:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## End points

```bash
# Acesse a documentação OpenAPI criada utilizando o swagger
GET /docs

# get a accessToken (email: teste@teste.com, password: teste)
POST /users/auth

# list all courses
GET /courses

# create a new course
POST /courses

# get a course details
GET /courses/:id

# update a course
PATCH /courses/:id

# remove a course
DELETE /courses/:id
```

## License

Nest is [MIT licensed](LICENSE).
