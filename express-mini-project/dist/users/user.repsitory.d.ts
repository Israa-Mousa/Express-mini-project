import { Role } from '../shared/repositories/role.enum';
import { User } from './user.entity';
export declare class UserRepository {
    private users;
    private idCounter;
    findAll(): User[];
    findById(id: string): User | undefined;
    findByEmail(email: string): User | undefined;
    create(name: string, email: string, password: string, role: Role): User;
    update(id: string, name?: string, email?: string, role?: Role): User | null;
    delete(id: string): boolean;
}
export declare const userRepository: UserRepository;
//# sourceMappingURL=user.repsitory.d.ts.map