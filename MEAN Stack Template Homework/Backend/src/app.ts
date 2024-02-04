import express from "express"
import appConfig from "./app-config";
import eventRoutes from "./6-routes/event_routes";
import dal from "./5-services/dal";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import cors from "cors";

const server = express();

server.use(cors())
server.use(express.json());

server.use("/api/events", eventRoutes);
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, async () => {
    await dal.connect();
    console.log("Listening on http://localhost:" + appConfig.port)
});