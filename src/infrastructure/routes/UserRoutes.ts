import { UserController } from "../../presentation/controllers/UserController";

const userController = new UserController();

export const UserRoutes = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);
    const method = req.method;
    const path = url.pathname;

    if (method === "POST" && path === "/users") {
        return userController.createUserHandler(req);
    }

    if (method === "GET" && path === "/users") {
        return userController.getAllUsersHandler();
    }

    return new Response("Not Found", { status: 404 });
}