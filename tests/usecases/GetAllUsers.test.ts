import { describe, it, expect } from "bun:test";
import { InMemoryUserRepository } from "../../src/adapters/gateways/InMemoryUserRepository";
import User from "../../src/entities/User";
import { GetAllUsers } from "../../src/usecases/GetAllUsers/GetAllUsers";

describe("GetAllUsers", () => {
    it("should get all users", async () => {
        const userRepository = new InMemoryUserRepository();
        const user1 = new User("1", "John Doe", "john@example.com");
        const user2 = new User("2", "Jane Doe", "jane@example.com");
        await userRepository.save(user1);
        await userRepository.save(user2);

        const getAllUsers = new GetAllUsers(userRepository);
        const response = await getAllUsers.execute();

        expect(response.users.length).toBe(2);
        expect(response.users).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ id: "1", name: "John Doe", email: "john@example.com" }),
                expect.objectContaining({ id: "2", name: "Jane Doe", email: "jane@example.com" }),
            ]),
        );
    });
});
