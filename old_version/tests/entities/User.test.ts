import { describe, it, expect } from "bun:test";
import { randomUUIDv7 } from "bun";
import User from "../../../src/domain/entities/User";

describe("User Entity", () => {
    it("Should create a new User with given id, name and email", () => {
        const userId = randomUUIDv7();
        const user = new User(userId, "John Doe", "john.doe@example.com");

        expect(user["id"]).toBe(userId);
        expect(user["name"]).toBe("John Doe");
        expect(user["email"]).toBe("john.doe@example.com");
    });
});
