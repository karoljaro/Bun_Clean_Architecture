import consola from "consola";
import UserController from "../controllers/UserControllers";

const userController = new UserController();

export const routes = async (req: Request): Promise<Response> => {
    consola.info(`Handling request: ${req.method} ${req.url}`);
    const url = new URL(req.url, `http://${req.headers.get("host")}`)

    // GET /users
    if (req.method === "GET" && url.pathname === "/users") {
        consola.info("GET /users route matched");
        return userController.getAllUsers(req);
    }

    // POST /users
    if (req.method === "POST" && url.pathname === "/users") {
        consola.info("POST /users route matched");
        return userController.createUser(req);
    }

    // NOT FOUND
    consola.error("Route not found");
    return new Response("Not Found", { status: 404 });
};
