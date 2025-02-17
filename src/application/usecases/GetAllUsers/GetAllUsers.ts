import type IUserRepository from "../../repositories/IUserRepository";
import { GetAllUsersResponse } from "./GetAllUsersResponse";

export class GetAllUsers {
    constructor(private userRepository: IUserRepository) {}

    async execute(): Promise<GetAllUsersResponse> {
        const users = await this.userRepository.getAllUsers();
        return new GetAllUsersResponse(users);
    }
}
