import { describe, it, expect, beforeEach } from "bun:test";
import UserUseCase from "../../src/useCases/UserUseCase";
import UserRepository from "../../src/repositories/UserRepository";
import User from "../../src/entities/User";

describe("User useCase", () => {
    let userUseCase: UserUseCase;
    let userRepository: UserRepository;

    beforeEach(() => {
        userRepository = new UserRepository();
        userUseCase = new UserUseCase();
    });

    it("Should get all users on start application", async () => {
        const users = await userUseCase.getUsers();
        expect(users).toEqual([]);
    });

    it("Should create a new user", async () => {
        const user = await userUseCase.createUser("John Doe", "john.doe@example.com");
        expect(user).toBeInstanceOf(User);
        expect(user["name"]).toBe("John Doe");
        expect(user["email"]).toBe("john.doe@example.com");
    });

    it ("Should display the created user when getUser is called", async () => {
        const newUser = await userUseCase.createUser("John Doe", "jane.doe@example.com");
        const users = await userUseCase.getUsers();

        expect(users).toContainEqual(newUser);
    })
})