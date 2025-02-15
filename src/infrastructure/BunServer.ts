import consola from "consola";
import { UserRoutes } from "../routes/UserRoutes";

Bun.serve({
    fetch: UserRoutes,
    port: 3000,
});

consola.info("Server started on port 3000");