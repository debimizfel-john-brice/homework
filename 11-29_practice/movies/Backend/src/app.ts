import express from "express";
import cors from "cors";
import routeNotFound from "./middleware/route-not-found";
import catchAll from "./middleware/catch-all";
import appConfig from "./utils/app-config";
import ciemaRoutes from "./routes/cinema_route";
const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/cinema", ciemaRoutes);

server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log("Listening on http://localhost:" + appConfig.port));