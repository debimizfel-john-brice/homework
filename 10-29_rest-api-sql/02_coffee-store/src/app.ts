import express from "express";
import AppConfig from "./4-utils/app_config";
import coffeeRoutes from "./6-routes/coffee_route";

// Create server object
const server = express();

// Create request body object
server.use(express.json());

// Routs:
server.use("/", coffeeRoutes);

// Run server
server.listen(AppConfig.port, () => console.log(`Server is running on port ${AppConfig.port}`));