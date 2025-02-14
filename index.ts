import { routes } from "./src/routes/UserRoutes"

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        console.log(`Request method: ${req.method}, URL: ${req.url}`);
        return routes(req);
    }
})

console.log(`Listening on http://localhost:${server.port} ...`);