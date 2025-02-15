import type User from "../../entities/User";

export class GetAllUsersResponse {
    constructor(public users: User[]) {}
}
