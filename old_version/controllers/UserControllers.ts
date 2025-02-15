import consola from "consola";
import UserUseCase from "../useCases/UserUseCase";

export default class UserController {
    private userUseCase: UserUseCase;

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    // Pobieranie wszytkich użytkowników
    async getAllUsers(req: Request): Promise<Response> {
        consola.success("Fetching all users");
        const users = await this.userUseCase.getUsers();

        return new Response(JSON.stringify(users), {
            headers: { "Content-Type": "application/json" },
        });
    }

    // Dodanie nowego użytkownika
    async createUser(req: Request): Promise<Response> {
        try {
            const body = await req.json();
            console.log("\nRequest body:", body);
            
            const { name, email } = body;
            if (!name || !email) {
                consola.error("Invalid request body: missing name or email");
                return new Response("Invalid request body", { status: 400 });
            }
            
            const user = await this.userUseCase.createUser(name, email);
            consola.success("New user created");
            
            return new Response(JSON.stringify(user), {
                status: 201,
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            consola.error("Error creating user:", error);
            return new Response("Invalid request body", { status: 400 });
        }
    }
}
