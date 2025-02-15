import { randomUUIDv7 } from "bun";
import User from "../../entities/User";
import type IUserRepository from "../../repositories/IUserRepository";
import type { CreateUserRequest } from "./CreateUserRequest";
import { CreateUserResponse } from "./CreateUserResponse";

export class CreateUser {
    constructor(private userRepository: IUserRepository) {}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const user = new User(randomUUIDv7(), request.name, request.email);

        await this.userRepository.save(user);

        return new CreateUserResponse(user.id, user.name, user.email);
    }
}
