import UserUseCase from "../useCases/UserUseCase";

export default class UserController {
    private userUseCase: UserUseCase;

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    // Pobieranie wszytkich użytkowników
    async getAllUsers(req: Request): Promise<Response> {
        const users = await this.userUseCase.getUsers();

        return new Response(JSON.stringify(users), {
            headers: { "Content-Type": "application/json" },
        });
    }

    // Dodanie nowego użytkownika
    async createUser(req: Request): Promise<Response> {
        const { name, email } = await req.json();
        const user = await this.userUseCase.createUser(name, email);

        return new Response(JSON.stringify(user), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    }
}
