<div align="center">
  <h1>🚀 Redis Playground</h1>
  <p>A lightweight, fast Node.js application demonstrating the power of Redis caching and message handling!</p>

  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
  [![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
</div>

<br />

## 🌟 Overview

Welcome to **Redis Playground**! This is a simple, yet robust learning project designed to experiment with core Redis features using Node.js and the `ioredis` library.

### What it does:
- **`app.js`**: An Express server showcasing **Redis Caching**. It fetches data from an external API, stores it temporarily in Redis (with an expiration time), and smartly serves the cached version for subsequent requests, drastically improving latency.
- **`string.js`**: A script demonstrating **Redis Lists & Blocking Operations**. Utilizing the `BLPOP` command, it waits for messages to be pushed to a list and processes them immediately when they appear.

---

## 🛠️ Prerequisites

Before you get started, make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/download/)
- [Redis](https://redis.io/download) (Make sure your local Redis server is up and running on default port `6379`)

---

## 🚀 Getting Started

Follow these steps to get your Redis Playground up and running locally.

### 1. Clone & Install
Install the required dependencies via NPM.

```bash
npm install
```

### 2. Run the Caching Server (`app.js`)
Start the Express API server that uses Redis as a caching layer.

```bash
node app.js
```
The server will run on `http://localhost:9000/`. Try hitting the base URL `GET /` multiple times to notice the swift response of the cached hit after the first API request!

### 3. Test the Redis Message Queue (`string.js`)
Run the script to wait for new list entries.

```bash
node string.js
```
It uses `BLPOP` to block the connection until a message is added to the `message` list. 

*(Pro tip: Open `redis-cli` in your terminal and type `LPUSH message "Hello Playground"` to see the Node instance instantly pick it up!)*

---

## 📂 Project Structure

```text
📁 redis-playground
├── 📄 app.js          # Express app demonstrating HTTP caching
├── 📄 client.js       # Centralized 'ioredis' client connection 
├── 📄 string.js       # Demonstration of Redis Lists (BLPOP)
├── 📄 package.json    # Project dependencies & metadata
└── 📄 README.md       # You are here!
```

---

## 💻 Tech Stack
- **JavaScript (Node.js)**
- **[Express](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework
- **[ioredis](https://github.com/redis/ioredis)**: A robust, performance-focused Redis client
- **[axios](https://axios-http.com/)**: Promise based HTTP client for external API requests

<br />

<div align="center">
  <i>Happy Caching! ⚡️</i>
</div>
