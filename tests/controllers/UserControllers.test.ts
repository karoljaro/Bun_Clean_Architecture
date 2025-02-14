import { describe, it, expect, beforeEach } from "bun:test";
import UserController from "../../src/controllers/UserControllers";
import UserUseCase from "../../src/useCases/UserUseCase";

describe("User Controller", () => {
    let userController: UserController;
    let userUseCase: UserUseCase;

    beforeEach(() => {
        userUseCase = new UserUseCase();
        userController = new UserController();
    });

    it("Should fetch all users on start", async () => {
        const request = new Request("http://localhost:3000/users", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const response = await userController.getAllUsers(request);
        expect(response.status).toBe(200);
        const users = await response.json();
        expect(users).toEqual([]);
    });

    it("Should create a new user", async () => {
        const request = new Request("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify({
                name: "John Doe",
                email: "john.doe@example.com",
            }),
            headers: { "Content-Type": "application/json" },
        });

        const response = await userController.createUser(request);
        expect(response.status).toBe(201);
        const user = await response.json();
        expect(user["name"]).toBe("John Doe");
        expect(user["email"]).toBe("john.doe@example.com");
    });

    it("Should return 400 if name is missing", async () => {
        const request = new Request("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify({
                email: "john.doe@example.com",
            }),
            headers: { "Content-Type": "application/json" },
        });

        const response = await userController.createUser(request);
        expect(response.status).toBe(400);
        const message = await response.text();
        expect(message).toBe("Invalid request body");
    });

    it("Should return 400 if email is missing", async () => {
        const request = new Request("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify({
                name: "John Doe",
            }),
            headers: { "Content-Type": "application/json" },
        });

        const response = await userController.createUser(request);
        expect(response.status).toBe(400);
        const message = await response.text();
        expect(message).toBe("Invalid request body");
    });

    it("Should return 400 if request body is invalid JSON", async () => {
        const request = new Request("http://localhost:3000/users", {
            method: "POST",
            body: "{ invalid json }",
            headers: { "Content-Type": "application/json" },
        });

        const response = await userController.createUser(request);
        expect(response.status).toBe(400);
        const message = await response.text();
        expect(message).toBe("Invalid request body");
    });
});
