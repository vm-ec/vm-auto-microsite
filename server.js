// server.js
const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

// Create a json-server instance
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Combine all data files
const dataFiles = ['users.json', 'products.json', 'orders.json'];

let db = {};
dataFiles.forEach((file) => {
  const filePath = path.join(__dirname, 'data', file);
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  db = { ...db, ...jsonData };
});

// Create a JSON router with merged data
const router = jsonServer.router(db);

// Use the router
server.use(router);

// Start the server on port 3000
const port = 3005;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
