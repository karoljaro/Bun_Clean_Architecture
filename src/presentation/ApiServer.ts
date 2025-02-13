export class ApiServer {
    public static async run(port?: number): Promise<void> {
        const server = Bun.serve({
            port: port || 3000,
            fetch(request, server) {
                return new Response("Bun")
            },
        });
        
        console.log(`Listening on http://localhost:${server.port} ...`);
    }
}
