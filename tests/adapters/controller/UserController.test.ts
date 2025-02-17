import { describe, it, expect, beforeEach } from "bun:test";
import { UserController } from "../../../src/presentation/controllers/UserController";
import { InMemoryUserRepository } from "../../../src/infrastructure/repositories/InMemoryUserRepository";
import User from "../../../src/domain/entities/User";

describe("UserController", () => {
    let userController: UserController;
    let userRepository: InMemoryUserRepository;

    beforeEach(() => {
        userRepository = new InMemoryUserRepository();
        userController = new UserController(userRepository);
    });

    it("should handle createUser request", async () => {
        const request = new Request("http://localhost/users", {
            method: "POST",
            body: JSON.stringify({ name: "John Doe", email: "john@example.com" }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const response = await userController.createUserHandler(request);
        const body = await response.json();

        expect(response.status).toBe(201);
        expect(body).toHaveProperty("userId");
        expect(body).toHaveProperty("userName", "John Doe");
        expect(body).toHaveProperty("userEmail", "john@example.com");
    });

    it("should handle getAllUsers request", async () => {
        const user1 = new User("1", "John Doe", "john@example.com");
        const user2 = new User("2", "Jane Doe", "jane@example.com");
        await userRepository.save(user1);
        await userRepository.save(user2);

        const response = await userController.getAllUsersHandler();
        const body = await response.json();

        expect(response.status).toBe(200);
        expect(Array.isArray(body.users)).toBe(true);
        expect(body.users.length).toBe(2);
        expect(body.users).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ userId: "1", userName: "John Doe", userEmail: "john@example.com" }),
                expect.objectContaining({ userId: "2", userName: "Jane Doe", userEmail: "jane@example.com" }),
            ]),
        );
    });
});
