import { describe, it, expect } from "bun:test";
import { InMemoryUserRepository } from "../../src/adapters/gateways/InMemoryUserRepository";
import { CreateUser } from "../../src/usecases/CreateUser/CreateUser";
import { CreateUserRequest } from "../../src/usecases/CreateUser/CreateUserRequest";

describe("CreateUser", () => {
    it("Should create a new user", async () => {
        const userRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(userRepository);
        const request = new CreateUserRequest("John Doe", "john@example.com");
        const response = await createUser.execute(request);

        expect(response["id"]).toBeDefined();
        expect(response["name"]).toBe("John Doe");
        expect(response["email"]).toBe("john@example.com");
    });
});
