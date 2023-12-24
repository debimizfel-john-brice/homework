import cors from "cors";
import express from "express";
import furnitureRoutes from "./6-routes/furniture_route";
import furnitureTypesRoutes from "./6-routes/furniture_types_route";
import routeNotFound from "./3-middleware/route_not_found";
import catchErrors from "./3-middleware/catch_errors";
import app_config from "./4-utils/app_config";

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", furnitureRoutes);
server.use("/api", furnitureTypesRoutes);

server.use("*", routeNotFound);
server.use(catchErrors);

server.listen(app_config.port, () => console.log("Server listening on port " + app_config.port));
