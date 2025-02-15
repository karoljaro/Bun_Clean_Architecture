import { randomUUIDv7 } from "bun";
import User from "../entities/User";
import type IUserRepository from "./IUserRepository";

export default class UserRepository {
    private users: User[] = []; // Tymczasowa "baza danych" w pamięci

    // Pobranie wszystkich użytkowników
    async getAllUsers(): Promise<User[]> {
        return this.users;
    };

    // Dodanie nowego użytkownika
    async createUser(name: string, email: string): Promise<User> {
        const newUser = new User(randomUUIDv7(), name, email);
        this.users.push(newUser);
        return newUser;
    }
}