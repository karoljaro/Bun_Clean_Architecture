import type User from "../../domain/entities/User";

export class GetAllUsersResponse {
    constructor(public users: User[]) {}
}
