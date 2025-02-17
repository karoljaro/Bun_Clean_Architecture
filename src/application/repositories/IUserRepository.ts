import User from "../../domain/entities/User";

export default interface IUserRepository {
    getAllUsers(): Promise<User[]>;
    save(user: User): Promise<void>;
}