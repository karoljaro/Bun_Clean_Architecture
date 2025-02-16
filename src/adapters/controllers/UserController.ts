import type IUserRepository from "../../repositories/IUserRepository";
import { CreateUser } from "../../usecases/CreateUser/CreateUser";
import { CreateUserRequest } from "../../usecases/CreateUser/CreateUserRequest";
import { GetAllUsers } from "../../usecases/GetAllUsers/GetAllUsers";
import { InMemoryUserRepository } from "../gateways/InMemoryUserRepository";
import { UserPresenter } from "../presenters/UserPresenter";

export class UserController {
    private createUser: CreateUser;
    private getAllUsers: GetAllUsers;
    private userPresenter: UserPresenter;

    constructor(userRepository: IUserRepository = new InMemoryUserRepository()) {
        // ==============[Usecases]==============
        this.createUser = new CreateUser(userRepository);
        this.getAllUsers = new GetAllUsers(userRepository);
        // ==============[Presenters]==============
        this.userPresenter = new UserPresenter();
    }

    // -------------------------------[Handlers]-------------------------------
    
    // =============={ Create }==============
    async createUserHandler(req: Request): Promise<Response> {
        try {
            const body = await req.json();
            const request = new CreateUserRequest(body.name, body.email);
            const response = await this.createUser.execute(request);
            return new Response(JSON.stringify(this.userPresenter.presentCreateUser(response)), { status: 201 });
        } catch (error) {
            if (error instanceof Error) {
                return new Response(JSON.stringify({ error: error.message }), {
                    status: 400,
                });
            } else {
                return new Response(JSON.stringify({ error: "An error occurred" }), { status: 500 });
            }
        }
    }

    // =============={ GetAllUsers }==============
    async getAllUsersHandler(): Promise<Response> {
        try {
            const response = await this.getAllUsers.execute();
            return new Response(JSON.stringify(this.userPresenter.presentGetAllUsers(response)), { status: 200 });
        } catch (error) {
            if (error instanceof Error) {
                return new Response(JSON.stringify({ error: error.message }), { status: 500 });
            } else {
                return new Response(JSON.stringify({ error: error }), { status: 500 });
            }
        }
    }
}
