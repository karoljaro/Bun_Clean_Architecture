import { describe, it, expect, beforeEach, spyOn } from "bun:test";
import UserController from "../../src/controllers/UserControllers";
import { routes } from "../../src/routes/UserRoutes";

class MockUserController extends UserController {
    async getAllUsers(req: Request): Promise<Response> {
        return new Response(
            JSON.stringify([
                { id: "1", name: "John Doe", email: "john.doe@example.com" },
            ]),
            {
                headers: { "Content-Type": "application/json" },
            },
        );
    }

    async createUser(req: Request): Promise<Response> {
        const { name, email } = await req.json();
        return new Response(JSON.stringify({ id: "1", name, email }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    }
}

describe("User Routes", () => {
    let userController: UserController;

    beforeEach(() => {
        userController = new MockUserController();
        spyOn(UserController.prototype, "getAllUsers").mockImplementation(
            userController.getAllUsers,
        );
        spyOn(UserController.prototype, "createUser").mockImplementation(
            userController.createUser,
        );
    });

    it("Should handle GET /users", async () => {
        const request = new Request("http://localhost:3000/users", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const response = await routes(request);
        expect(response.status).toBe(200);
        const users = await response.json();
        expect(users).toEqual([
            { id: "1", name: "John Doe", email: "john.doe@example.com" },
        ]);
    });

    it("Should handle POST /users", async () => {
        const request = new Request("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify({
                name: "Jane Doe",
                email: "jane.doe@example.com",
            }),
            headers: { "Content-Type": "application/json" },
        });

        const response = await routes(request);
        expect(response.status).toBe(201);
        const user = await response.json();
        expect(user).toEqual({
            id: "1",
            name: "Jane Doe",
            email: "jane.doe@example.com",
        });
    });

    it("Should return 404 for unknown routes", async () => {
        const request = new Request("http://localhost:3000/unknown", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const response = await routes(request);
        expect(response.status).toBe(404);
        const message = await response.text();
        expect(message).toBe("Not Found");
    });
});
