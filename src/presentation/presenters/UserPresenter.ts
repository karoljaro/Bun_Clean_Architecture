import type { CreateUserResponse } from "../../application/usecases/CreateUser/CreateUserResponse";
import type { GetAllUsersResponse } from "../../application/usecases/GetAllUsers/GetAllUsersResponse";

export class UserPresenter {
    presentCreateUser(response: CreateUserResponse): any {
        return {
            userId: response.id,
            userName: response.name,
            userEmail: response.email,
        };
    }

    presentGetAllUsers(response: GetAllUsersResponse): any {
        return {
            users: response.users.map((user) => ({
                userId: user.id,
                userName: user.name,
                userEmail: user.email,
            })),
        };
    }
}