import type User from "../../entities/User";
import type IUserRepository from "../../repositories/IUserRepository";


export class InMemoryUserRepository implements IUserRepository {
    private users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async getAllUsers(): Promise<User[]> {
        return this.users;
    }
}