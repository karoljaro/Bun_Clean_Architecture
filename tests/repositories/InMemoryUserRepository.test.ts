import { describe, it, expect } from "bun:test";
import { InMemoryUserRepository } from "../../src/adapters/gateways/InMemoryUserRepository";
import User from "../../src/entities/User";

describe("InMemoryUserRepository", () => {
    it("should find all users", async () => {
        const userRepository = new InMemoryUserRepository();
        const user1 = new User("1", "John Doe", "john@example.com");
        const user2 = new User("2", "Jane Doe", "jane@example.com");
        await userRepository.save(user1);
        await userRepository.save(user2);

        const users = await userRepository.getAllUsers();
        expect(users.length).toBe(2);
        expect(users).toEqual(expect.arrayContaining([user1, user2]));
    });
});
