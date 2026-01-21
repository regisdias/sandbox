# Node.js Study Guide

Este projeto é um guia prático de estudos para entrevistas técnicas e testes de Node.js. Ele cobre desde conceitos fundamentais até tópicos avançados de arquitetura e segurança.

## 📦 Instalação

Para configurar o projeto em sua máquina local, siga estes passos:

1.  **Clone o repositório** (se aplicável) ou baixe os arquivos.
2.  **Instale as dependências** do Node.js:
    ```bash
    npm install
    ```
    Isso instalará todas as bibliotecas listadas no `package.json`, incluindo Express, Jest e outras ferramentas.

## 🚀 Como Executar

1.  **Rodar os Testes** (Verifica todo o projeto):
    ```bash
    npm test
    ```

2.  **Rodar o Servidor API**:
    ```bash
    npm start
    ```

3.  **Executar um conceito específico**:
    ```bash
    node src/concepts/async.js
    ```

## 📂 Guia de Arquivos e Conteúdo

Abaixo está um mapa do projeto explicando o que cada arquivo contém e qual conceito ele aborda.

### 1. Conceitos Fundamentais (`src/concepts/`)

Estes scripts são exemplos isolados que demonstram o funcionamento interno do Node.js.

- **`src/concepts/async.js`**
  - **Assunto**: Programação Assíncrona.
  - **Conteúdo**: Exemplos comparativos de Callbacks, Promises e Async/Await. Mostra como lidar com fluxo assíncrono.
  
- **`src/concepts/streams.js`**
  - **Assunto**: Streams (Fluxos de Dados).
  - **Conteúdo**: Implementação de Readable, Writable e Transform streams. Demonstra como processar dados sob demanda (chunk por chunk) sem carregar tudo na memória.

- **`src/concepts/eventLoop.js`**
  - **Assunto**: Event Loop & Non-Blocking I/O.
  - **Conteúdo**: Código que demonstra a ordem de execução de operações síncronas, Microtasks (Promises, process.nextTick) e Macrotasks (setTimeout, setImmediate).

- **`src/concepts/errorHandling.js`**
  - **Assunto**: Tratamento de Erros.
  - **Conteúdo**: Estratégias para capturar erros em blocos síncronos (try/catch), promessas rejeitadas e handlers globais (`uncaughtException`).

- **`src/concepts/memory.js`**
  - **Assunto**: Gerenciamento de Memória.
  - **Conteúdo**: Script para inspecionar o uso de memória do processo (`process.memoryUsage()`) e analisar alocação.

- **`src/concepts/problemSolving.js`**
  - **Assunto**: Problema do Mundo Real.
  - **Conteúdo**: Solução para processamento de arquivos grandes usando Streams, Pipeline e tratamento de erros robusto. Simula um cenário de produção.

### 2. Algoritmos (`src/algorithms/`)

Implementações de desafios clássicos de entrevistas.

- **`src/algorithms/longestWord.js`**: Lógica para encontrar a maior palavra em uma string (String Manipulation).
- **`src/algorithms/bracketMatcher.js`**: Lógica para validar parênteses aninhados usando pilha/stack (Recursion/Combinatorics).

### 3. API & Framework (`src/api/` & `src/index.js`)

Exemplo de uma aplicação servidora robusta usando Express.

- **`src/index.js`**
  - **Assunto**: Servidor Express & Segurança.
  - **Conteúdo**: Configuração do servidor com Middlewares de Segurança (**Helmet**, **CORS**), Limitação de Taxa (**Rate Limiting**) e gerenciador global de erros.
  
- **`src/api/routes.js`**: Rotas da API que expõem os algoritmos.
- **`src/api/users.js`**: Exemplo de rotas RESTful para um recurso de Usuários.

### 4. Banco de Dados (`src/db/`)

- **`src/db/sqlite.js`**
  - **Assunto**: Bancos de Dados SQL.
  - **Conteúdo**: Exemplo de conexão com SQLite, criação de tabelas, inserção segura contra SQL Injection (Prepared Statements) e consultas.

### 5. Documentação & DevOps

- **`docs/system_design.md`**: Notas teóricas sobre Scalability, Load Balancing, Clustering e Microservices.
- **`.github/workflows/ci.yml`**: Configuração de CI (Integração Contínua) para rodar testes automaticamente no GitHub Actions.

### 6. Testes (`tests/`)

Testes automatizados usando Jest e Supertest.

- **`tests/algorithms.test.js`**: Testes unitários para os algoritmos.
- **`tests/api.test.js`**: Testes de integração para os endpoints da API.
- **`tests/advanced.test.js`**: Testes avançados utilizando Mocks e Spies para simular dependências.
