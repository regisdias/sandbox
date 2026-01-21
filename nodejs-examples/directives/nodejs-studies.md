# Check Environment

## Goal
How to Prepare for a Senior Node.js Developer Interview: Full Roadmap & Questions

## Inputs
Crie todos os códigos necessários para resolver os problemas propostos, criando comentários explicativos.

1) Asynchronous Programming — Programação Assíncrona (fundamental)
Callbacks
Promises
Async/Await
    
2) Streams — Fluxos de Dados
| Tipo      | Uso                           |
| --------- | ----------------------------- |
| Readable  | Ler dados (arquivo, rede)     |
| Writable  | Escrever dados                |
| Duplex    | Leitura + escrita             |
| Transform | Modifica dados enquanto passa |

3) Event Loop & Non-Blocking I/O

Entender como Node.js lida com concorrência mesmo sendo single-threaded é essencial.

🔶 Conceitos importantes

✔ Event loop — gerencia callbacks e promessas.
✔ Non-blocking I/O — operações que não bloqueiam a thread principal.

Ordem de execução:

Síncrono

Microtasks (Promises)

Macrotasks (setTimeout, etc.)

4) Error Handling — Tratamento de Erros

Erros podem acontecer de forma síncrona ou assíncrona.

✔ Estratégias:

try/catch em funções async/await.

Manipular rejections em Promises.

Eventos globais:

process.on('uncaughtException', err => {
  console.error('Erro não capturado:', err);
});

5) Memory Management — Gerenciamento de Memória

Node.js faz garbage collection, mas vazamentos ainda acontecem.

🧠 Como diagnosticar:

Ferramentas: node-inspect, Chrome DevTools, heap snapshots.

Know quando objetos ficam retidos desnecessariamente.

6) Frameworks & Libraries
🪶 Express.js

Roteamento, middleware, APIs REST.

Exemplo de servidor:

const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  res.send('Lista de usuários');
});

app.listen(3000);

✨ NestJS

Framework fortemente arquitetado com TypeScript.

📌 Outras libs

Mongoose (MongoDB)

Sequelize (SQL)

Socket.io (WebSockets)

Passport (Auth)

7) Databases & ORMs

Saber SQL vs NoSQL (PostgreSQL / MySQL vs MongoDB / Redis).

Escrever queries otimizadas.

Migrar esquemas.

Usar ORM/ODM para abstração de modelos.

8) System Design & Arquitetura

Nesta fase, entrevistas cobram:

➤ Escalabilidade

Load balancing

Clustering

Horizontal scaling

➤ Microservices

Comunicação via REST/Queues (RabbitMQ, Kafka)

➤ Workers & Filas

Separar tarefas longas de requests HTTP.

9) Testing & Debugging
🧪 Testes:

Unit → Jest, Mocha/Chai

E2E → Supertest

Mock dependencies

🐛 Debugging:

node --inspect

Chrome DevTools

Logs estruturados com Winston/Bunyan

10) Security Best Practices

Prevenir SQL Injection, XSS, CSRF.

Autenticação: JWT / OAuth.

Rate limiting, HTTPS.

Sanitizar entradas de usuários.

11) DevOps & Deployment

CI/CD: GitHub Actions, Jenkins.

Dockerizar app.

(Opcional) Kubernetes para orquestração.

Deploy em AWS / GCP / Azure.

12) Real-World Problem-Solving

Algoritmos e estrutura de dados para tarefas complexas.

Explicar como você resolvia bugs em produção.

Mostrar habilidades de comunicação e liderança técnica.

## Tool
- None.

## Output
- Console output indicating success or failure.

## Edge Cases
- None.
