<div align="center">
  <a href="https://github.com/karinacristo/projetoAcademiaAPI">
    <img src="src/image/academiaLogo.png" alt="Logo JavaScript" width="100" height="100">
  </a>
  
  <h1 align="center">Academia Fit API</h1>
  
  <p align="center">
   Projeto educacional do curso de Web Dev Full Stack da Resilia Educação referente ao Módulo 04, utilizando o Node.js com framework Express.
   <br />
    <a href="https://github.com/karinacristo/projetoAcademiaAPI"><strong>Explore os arquivos do projeto. »</strong></a>
    <br />
    <br />
    <a href="https://github.com/karinacristo/projetoAcademiaAPI/issues">Gostaria de ajudar? Me envie uma sugestão ou melhoria.</a>
</div>
<br />
<br />
  <summary>Conteúdo sobre a documentação.</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
    </li>
    <li>
      <a href="#como-instalar-e-iniciar">Como instalar e iniciar o projeto</a>
    </li>
    <li><a href="#contato">Contato</a></li>
  </ol>
  
  ## Sobre o Projeto
  
  O objetivo proposto como projeto final do módulo 4, é criar uma API Rest de uma Academia. Criei a entidade 'Agendamentos' e com ela você poderá realizar as operações básicas CRUD, que são elas:
  <br />
  * Ler todos os agendamentos do banco de dados, ou, filtrar um agendamento por ID ou por nome do cliente.
  * Criar um novo agendamento na academia.
  * Deletar um agendamento pelo número do ID.
  * Atualizar um ou vários dados de um agendamento.

  #### Tecnologias, pacotes e frameworks utilizados ⚙️
 
  * [JavaScript](https://www.javascript.com/)
  * [Node.js](https://nodejs.org/en/) v16.14.0
  * [NPM](https://www.npmjs.com/) v8.3.1
  * [Express](https://www.npmjs.com/package/express) v4.17.3
  * [Nodemon](https://www.npmjs.com/package/nodemon) v2.0.15
  * [SQLite](https://www.sqlite.org/index.html) v5.0.2


 ## Como instalar e iniciar 🏁
  
 Este é um exemplo sobre como instalar e configurar seu projeto localmente. Para fazer uma cópia local e iniciar, siga estas etapas de exemplo simples.

#### Pré-Requisitos

Lembre-se do que você irá precisará ter instalado em sua máquina para executar o prejeto. 👇
1. Instale NPM
   ```sh
   npm install
   ```
   
  #### Instalação
  
  Abra o terminal/Powershell e rode os comandos abaixo:

Para clonar o repositório:
 ```sh
   git clone https://github.com/karinacristo/projetoAcademiaAPI.git
   ```
Acesse a pasta criada:
```sh
cd projetoAcademiaAPI
```
Para iniciar os projetos use o comando abaixo
```sh
npm start
```

#### Rotas e seus resultados

Ao executar a entidade agendamentos, aparecerá os atributos adicionados à ela, que são: id, cliente, data, profissional, período, serviço e observações. Veja os resultados:

* Método GET para visualizar todos os agendamentos marcados. ( /agendamentos)

Schema da resposta. 
```sh
{
  "Agendamento": [
    {
     "Id_cliente": (string),
     "Cliente": (string),
     "Data": (string),
     "Profissional": (string),
     "Período": (string),
     "Serviço": (string),
     "Observações": (string),
    }
  ]
  ```
  
  * Método GET para filtrar um dado por ID ( /agendamentos/ID_CLIENTE/{o número de ID})

Schema da resposta. 
```sh
{
  "Agendamento": [
    {
     "Id_cliente": (string),
     "Cliente": (string),
     "Data": (string),
     "Profissional": (string),
     "Período": (string),
     "Serviço": (string),
     "Observações": (string),
    }
  ],
  "Erro": (booleano)
  ```
  * Método GET para filtrar um dado por nome de um cliente ( /agendamentos/cliente/{o nome do cliente})

Schema da resposta. 
```sh
{
  "Agendamento": [
    {
     "Id_cliente": (string),
     "Cliente": (string),
     "Data": (string),
     "Profissional": (string),
     "Período": (string),
     "Serviço": (string),
     "Observações": (string),
    }
  ],
  "Erro": (booleano)
  ```
  * Método POST para adicionar um novo agendamento ( /agendamentos)

Schema da resposta. 
```sh
{
  "Mensagem": (string),
  "Erro": (booleano)
 }
  ```
  * Método DELETE para apagar um agendamento por ID ( /agendamentos/ID_CLIENTE/{o número de id})

Schema da resposta. 
```sh
{
  "Mensagem": (string),
  "Erro": (booleano)
  }
  ```
  * Método PUT para atualizar um agendamento por ID ( /agendamentos/ID_CLIENTE/{o número de id})

Schema da resposta. 
```sh
{
	"Mensagem": (string),
	"Agendamento": {
		"Cliente": (string),
		"Data": (string),
		"Período": (string),
		"Serviço": (string),
		"Observações": (string)
	},
	"Erro": (booleano)
}
  ```
  ## Contato 📝

Karina Cristo - [Linkedin](https://www.linkedin.com/feed/) - [GitHub](https://github.com/karinacristo)
  



   
   
   
   
   
   
   
   
  
  
