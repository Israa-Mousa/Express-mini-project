import { User } from "./user.entity";
declare class UserService {
    getUsers(page: number, limit: number): User[];
    getUser(id: string): User | undefined;
    createUser(name: string, email: string, password: string, role?: string): Promise<User>;
    updateUser(id: string, name: string, email: string, role: string): User | null;
    deleteUser(id: string): boolean;
}
export declare const userService: UserService;
export {};
//# sourceMappingURL=user.service.d.ts.map