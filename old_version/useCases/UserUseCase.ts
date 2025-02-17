import type User from "../../src/domain/entities/User";
import UserRepository from "../repositories/UserRepository";

export default class UserUseCase {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    // Pobranie wszystkich użytkowników
    async getUsers(): Promise<User[]> {
        return await this.userRepository.getAllUsers();
    }

    // Utworzenie nowego użytkownika
    async createUser(name: string, email: string): Promise<User> {
        return await this.userRepository.createUser(name, email)
    }
}