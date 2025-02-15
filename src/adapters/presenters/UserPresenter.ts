import type { CreateUserResponse } from "../../usecases/CreateUser/CreateUserResponse";
import type { GetAllUsersResponse } from "../../usecases/GetAllUsers/GetAllUsersResponse";

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