import consola from "consola";
import { routes } from "./src/routes/UserRoutes";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return routes(req);
    }
});

consola.info(`Listening on http://localhost:${server.port}\n----------------------------------------`);