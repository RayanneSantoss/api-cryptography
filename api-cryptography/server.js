const express = require("express");
const connectDatabase = require("./config/database");
const app = express();
const port = 3000;

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.use(express.json());
connectDatabase();

const transactionsRoutes = require("./routes/transactionRoutes");
app.use(transactionsRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});