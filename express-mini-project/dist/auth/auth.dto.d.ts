import { User } from '../users/user.entity';
export type RegisterDTO = Pick<User, 'email' | 'password' | 'name'>;
export type LoginDTO = {
    email: string;
    password: string;
};
export type LoginResponseDTO = {
    data: Omit<User, 'password'>;
    token: string;
};
export type UpdateUserProfileDTO = Partial<Pick<User, 'name' | 'email'>>;
export type GetUserProfileDTO = Omit<User, 'password'>;
export type UserResponseDTO = Omit<User, 'password'>;
//# sourceMappingURL=auth.dto.d.ts.map