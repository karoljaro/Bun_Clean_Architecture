import { describe, it, expect, beforeEach } from "bun:test";
import UserRepository from "../../src/repositories/UserRepository";
import User from "../../../src/entities/User";

describe("User Repository", () => {
    let userRepository: UserRepository;

    beforeEach(() => {
        userRepository = new UserRepository();
    });

    it("Should get all users on start application", async () => {
        const users = await userRepository.getAllUsers();
        expect(users).toEqual([]);
    });

    it("Should create a new user", async () => {
        const user = await userRepository.createUser("John Doe", "john.doe@example.com");
        expect(user).toBeInstanceOf(User);
        expect(user["name"]).toBe("John Doe");
        expect(user["email"]).toBe("john.doe@example.com");
    });
});