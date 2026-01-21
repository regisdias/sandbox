# Topic 8: System Design & Architecture

## Scalability
- **Vertical Scaling (Scaling Up)**: Adding more power (CPU, RAM) to an existing server. Limited by hardware.
- **Horizontal Scaling (Scaling Out)**: Adding more servers. Preferred for modern distributed systems.

### Load Balancing
- Distributes incoming network traffic across multiple servers.
- Tools: Nginx, HAProxy, AWS ELB.
- Strategies: Round Robin, Least Connections, IP Hash.

### Clustering in Node.js
Node.js is single-threaded. To utilize multi-core systems, use the `cluster` module or a process manager like PM2.

```javascript
/* Example of Clustering */
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World');
  }).listen(8000);
}
```

## Microservices
- Splitting a monolithic app into smaller, independent services.
- **Pros**: Independent scaling, tech stack flexibility, fault isolation.
- **Cons**: Complexity in deployment, testing, and inter-service communication.

### Communication
- **Synchronous**: REST, gRPC (HTTP/2).
- **Asynchronous**: Message Queues (RabbitMQ, Kafka, SQS). Decouples services.

## Workers & Queues
- Offload heavy computation (image processing, PDF generation, email sending) to background workers.
- **Producer**: Adds job to queue.
- **Consumer (Worker)**: Processes job from queue.
- Libs: `bull` (Redis-based), `amqplib` (RabbitMQ).
