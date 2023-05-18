# water-quality-monitoring
Repositório referente a um sistema de gerenciamento de análise de qualidade de água.

Projeto de autoria própria, cujo principal objetivo desse projeto foi fazer uma aplicação Fullstack em node e ReactJs.

## Tecnologias usadas:
backend:
- Node/express
- Docker
frontend:
- React
- Vite
- Mui

---

## Setup do projeto Frontend

Para isto, foi criado um repositório chamado "Service", onde todas as informações do Backend estão armazenadas e com testes implementados e outra pasta chamada "Client",
onde o Frontend foi construído.

Decidi por construir uma SPA com roteamento via React Router uma arquitetura simples baseada em páginas/componentes, buscando ainda ter componentes bem delimitados para facilitar a manutenção.

Utilizei o Vite como bundler/compilador por conta da sua velocidade se comparado ao Webpack, se tratando de uma ferramenta mais ágil e moderna para o desenvolvimento. Além disso,
otimizando o tempo de trabalho e evitando o gargalo de tempo de desenvolvimento.

A autenticação é salva pela lib Cookies.js, onde a mesma é usada pra fazer o gerenciamento global do token. 

A lógica de requisições foi separada em uma pasta de Service, e utiliza o framework Axios para executar as chamadas para o backend.

Como nao foi passado um padrão de design, para facilitar a estilização, utilizei a bilbioteca Material Ui, que traz um design-system moderno, fluido e responsivo. Também fiz algumas alterações no tema padrão para que a aplicação tenha um fundo escura, que passa uma impressão de maior seriedade, credibilidade e por conta do contraste, recebe imagens, logos e texto sem comprometer a experiência do usuário.

## Setup do projeto Backend

Por se tratar de uma API simples, decidi por uma arquitetura com um Modulo Service e Controller, separando cada contexto de aplicação, facilitando assim a manutenção de uma rota específica.

O banco de dados foi construído com Mongodb e para construir os schemas de forma mais simples, o Mongoose foi utilizado.

O banco foi configurado para rodar em um container do Docker, junto com o backend, configurado através de um arquivo docker-compose.yml, o que facilita a sua execução.

Rotas: 

---

## Como utilizar a aplicação?

###Backend


Para inicializar a aplicação:

Certifique-se de possuir o Docker instalado

Execute o comando `npm i` ou `npm install` para instalar as dependencias do projeto

Abra o terminal na pasta raiz

Execute o comando `docker-compose up --build`

O banco de dados irá rodar na porta 3005 do localhost

Renomeie a pasta `example.env` para `.env` ou crie uma pasta `.env` com as mesmas variáveis de ambiente definidas

A aplicação irá rodar na porta 3005 do localhost

###Frontend


Para inicializar a aplicação:

Execute o comando `npm i` ou `npm install` para instalar as dependencias do projeto

Rode o comando `npm run dev para startar a aplicação, que irá rodar na porta 5173.

OBS.: Para logar, utilize o email:
`luiza@email.com`
`secretpassword`


---

## Rotas

## POST/login

Implementa a autenticação do usuário, recebendo as informações de login no seguinte formato:

![image](https://github.com/Ludilly/water-quality-monitoring/assets/72472350/856d17f8-86ae-4843-8ac2-d747bbac272b)

Caso a autenticação seja bem sucedida, será retornado um token JWT com validade de 1 dia, que poderá ser utilizado para testar as demais rotas da aplicação.

## GET/analysis
Retorna uma lista com todos as análises criadas pelo usuário.

Essa rota exige a autenticação através do token,gerado pela rota `POST /auth` e a passagem do username no header da requisição para possibilitar a busca dos projetos, que só acontecerá caso o token seja compatível com o usuário.

## GET/analysis:id

Busca uma única análise, recebendo o id no corpo da aplicação:

![image](https://github.com/Ludilly/water-quality-monitoring/assets/72472350/1d435046-7430-49d7-9d6c-d7265ad8669e)
![image](https://github.com/Ludilly/water-quality-monitoring/assets/72472350/838271aa-196e-4442-8fb5-a16b2db21d10)

## GET/agent/:agent
Busca uma lista de análise filtradas pelo nome do agente

## PUT /projects/:id
Uma amostra é atualizada ao passar um `id` como parâmetro

![image](https://github.com/Ludilly/water-quality-monitoring/assets/72472350/8d44037e-4c9b-457c-8fb2-c1adabd92e73)

## POST/createSample

Cria uma análise para ser renderizada
![image](https://github.com/Ludilly/water-quality-monitoring/assets/72472350/99027260-77de-4007-9141-70abdb855a35)


##CONGIFS IMPORTANTES

É necessário setar os valores das envs com esses valores:
`PORT=3005`
`JWTSECRET='624e771f-f59d-4a24-8431-d92d119f0556'`

Pois o sistema não existe um sistema de criação de usuários


## O que poderia melhorar?

Acredito que eu poderia melhorar essas aplicações e, abaixo, cito alguns pontos:
 - Criar validações no Backend utilizando o Joi para diminuir complexidade das funções
 - Criar testes para as validações
 - Criar um hook customizado para a requisição da API
 - Adição de um gerenciador de estado com Redux para deixar a aplicação escalável para um crescimento maior
 - Criação de testes em Cypress no front para testar a jornada do usuário
 - Documentação da API através do Swagger
