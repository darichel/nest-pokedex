<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) backend app.

## Clone repository

```bash
$ git clone https://github.com/darichel/nest-pokedex.git
```

## Create new branch for development

```bash
$ git checkout -b develop
```

## Install dependencies

```bash
$ npm install
```

## Install Nest CLI

```bash
$ npm i -g @nestjs/cli
```

## Get up database

```bash
$ docker-compose up -d
```

## Init app

```bash
$ npm run start:dev
```

Clone **.env.template** file and change it to __.env___ and fill all enviroment vars.

```bash
$ docker-compose up -d
```

## Build database with SEED

```bash
https://localhost:3000/api/v2/seed
```

## Build
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

## Run
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up

## Nota
Por defecto, __docker-compose__ usa el archivo ```.env```, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con
```
docker-compose -f docker-compose.prod.yaml up --build
```

## Stack

*MongoDB
*Nest
