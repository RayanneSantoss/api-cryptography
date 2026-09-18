# API de Transações com Criptografia

API REST desenvolvida em Node.js para gerenciamento de transações, com armazenamento de dados sensíveis utilizando criptografia AES.

## Sobre o projeto

Este projeto foi desenvolvido como um desafio de backend com o objetivo de implementar um CRUD de transações e proteger informações sensíveis armazenadas no banco de dados.

Os campos `userDocument` e `creditCardToken` são tratados como dados sensíveis e armazenados de forma criptografada.

## Funcionalidades

* Criar uma transação
* Listar todas as transações
* Buscar uma transação por ID
* Atualizar uma transação
* Excluir uma transação
* Criptografar dados sensíveis antes de armazená-los
* Descriptografar os dados ao serem recuperados pela API

## Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* CryptoJS
* Postman
* dotenv

## Estrutura do projeto

```text
api-cryptography/
├── controllers/
├── config/
├── models/
├── crypto/
├── middlewares/
├── routes/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Campos da transação

| Campo             | Tipo   | Sensível |
| ----------------- | ------ | -------- |
| `id`              | Number | Não      |
| `userDocument`    | String | Sim      |
| `creditCardToken` | String | Sim      |
| `value`           | Number | Não      |

## Criptografia

Os campos sensíveis são criptografados utilizando o algoritmo **AES** antes de serem armazenados no MongoDB.

Fluxo de armazenamento:

```text
API
 ↓
Controller
 ↓
Model
 ↓
🔐 Criptografia AES
 ↓
MongoDB
```

Na leitura:

```text
MongoDB
 ↓
🔓 Descriptografia
 ↓
API
```

Dessa forma, os dados sensíveis não ficam armazenados diretamente no banco.

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd api-cryptography
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto utilizando o `.env.example` como referência.

Exemplo:

```env
MONGODB_USERNAME=""
MONGODB_PASSWORD=""
MONGODB_URI=""
CRYPTO_SECRET=""
```

Preencha os valores com as configurações do seu ambiente.

> O arquivo `.env` não deve ser enviado para o GitHub, pois contém informações sensíveis.

### 5. Execute a aplicação

```bash
node src/server.js
```

A API estará disponível em:

```text
http://localhost:3000
```

## Endpoints

### Criar transação

```http
POST /transactions
```

Exemplo:

```json
{
  "userDocument": "12345678900",
  "creditCardToken": "abc123",
  "value": 150
}
```

### Listar transações

```http
GET /transactions
```

### Buscar por ID

```http
GET /transactions/:id
```

Exemplo:

```text
GET /transactions/1
```

### Atualizar transação

```http
PUT /transactionUpdate/:id
```

Exemplo:

```json
{
  "userDocument": "11122233344",
  "creditCardToken": "novo-token",
  "value": 300
}
```

### Excluir transação

```http
DELETE /transactionDelete/:id
```

Exemplo:

```text
DELETE /transactionDelete/1
```

## Segurança

As credenciais do MongoDB e a chave utilizada na criptografia são armazenadas em variáveis de ambiente.

O arquivo `.env` está incluído no `.gitignore` e não deve ser publicado no repositório.

## Testes

As requisições da API foram testadas utilizando o **Postman**.

## Objetivo

O projeto tem como objetivo demonstrar conhecimentos em desenvolvimento de APIs REST, operações CRUD, integração com MongoDB e proteção de dados sensíveis por meio de criptografia.
