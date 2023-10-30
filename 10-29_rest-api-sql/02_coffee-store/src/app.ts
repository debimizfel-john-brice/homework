import express from "express";
import AppConfig from "./4-utils/app_config";
import productRouts from "./6-routes/product_route";

// Create server object
const server = express();

// Create request body object
server.use(express.json());

// Routs:
server.use("/", productRouts)

// Run server
server.listen(AppConfig.port, () => console.log(`Server is running on port ${AppConfig.port}`));