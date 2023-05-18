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

Execute o comando `npm i` ou npm install para instalar as dependencias do projeto

Abra o terminal na pasta raiz

Execute o comando docker-compose up --build

O banco de dados irá rodar na porta 3005 do localhost

Renomeie a pasta example.env para .env ou crie uma pasta .env com as mesmas variáveis de ambiente definidas

A aplicação irá rodar na porta 3005 do localhost

###Frontend


Para inicializar a aplicação:

Execute o comando npm i ou npm install para instalar as dependencias do projeto

Rode o comando npm run dev para startar a aplicação, que irá rodar na porta 5173.

OBS.: Para logar, xxxxxxxxxx


---

## O que poderia melhorar?

Acredito que eu poderia melhorar essas aplicações e, abaixo, cito alguns pontos:
 - Criar validações no Backend utilizando o Joi para diminuir complexidade das funções
 - Criar testes para as validações
 - Criar um hook customizado para a requisição da API
 - Adição de um gerenciador de estado com Redux para deixar a aplicação escalável para um crescimento maior
 - Criação de testes em Cypress no front para testar a jornada do usuário
 - Documentação da API através do Swagger
