import express from "express";
import cors from "cors";
import categoryRoutes from "./6-routes/category-routes";
import productRoutes from "./6-routes/product-routes";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";


// Server
const server = express();

// Middleware:
server.use(cors());
server.use(express.json());

// Routes:
server.use("/api/categories", categoryRoutes );
server.use("/api", productRoutes );

server.use("*", routeNotFound );
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`))


