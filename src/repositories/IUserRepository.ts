import User from "../entities/User";

export default interface IUserRepository {
    getAllUsers(): Promise<User[]>;
    save(user: User): Promise<void>;
}