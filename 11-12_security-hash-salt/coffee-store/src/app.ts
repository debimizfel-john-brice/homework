import AppConfig from "./4-utils/app_config";
import authRoutes from "./6-routes/auth_route";
import catchErrors from "./3-middleware/catch_errors";
import checkPrice from "./3-middleware/check_price";
import coffeeRoutes from "./6-routes/coffee_route";
import express from "express";
import routeNotFound from "./3-middleware/route_not_found";
import showId from "./3-middleware/show_id";
import useFilelog from "./3-middleware/use_filelog";

// Create server object
const server = express();

// Create request body object
server.use(express.json());

// Create middleware
server.put("/api/coffees/:id", showId);
server.post("/api/coffees", checkPrice);
server.use(useFilelog);

// Routs:
server.use("/", authRoutes);
server.use("/", coffeeRoutes);

// Error handling
server.use("*", routeNotFound);
server.use(catchErrors);

// Run server
// TODO - por que funciona el appconfig si tienen dos clases?
server.listen(AppConfig.port, () => console.log(`Server is running on port ${AppConfig.port}`));