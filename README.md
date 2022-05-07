# projeto-me-poupe-na-web
---
##### Comandos para iniciar o projeto:
`docker-compose up`: instalar e subir o projeto no Docker. 
Caso não queira utilizar o Docker: `npm install` e `npm run dev`.

Em ambas maneiras, a API estará disponível em `localhost:3333`.

##### Endpoints da API:

Cálculo da média: `GET: /calculateAverage?n1={numero1}&n2={numero2}`
Consulta de CEP: `GET: /searchCEP/{CEP}`

##### Testes:

Para rodar os testes, utilize o comando `node ace test`.

##### Principais diretórios do projeto:

- `app/Controllers`: controladores da aplicação, onde reside a lógica das requisições;
- `app/Validators`: arquivos para validação de rota;
- `app/Middlewares`: onde estão definidas as middlewares da API;
- `start/routes`: endereços de rotas;
- `tests/functional`: testes da API.