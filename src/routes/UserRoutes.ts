import UserController from "../controllers/UserControllers";

const userController = new UserController();

export const routes = async (req: Request): Promise<Response> => {
    // GET /users
    if (req.method === "GET" && req.url === "/users") {
        return userController.getAllUsers(req);
    }

    // POST /users
    if (req.method === "POST" && req.url === "/users") {
        return userController.createUser(req);
    }

    // NOT FOUND
    return new Response("Not Found", { status: 404 });
};
