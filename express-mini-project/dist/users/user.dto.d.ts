import { User } from './user.entity';
import { z } from 'zod';
export type UserDTO = Omit<User, 'password'>;
export type RegisterDTO = Pick<User, 'email' | 'password' | 'name'>;
export type RegisterResponseDTO = Omit<User, 'password'>;
export type UpdateUserDTO = Partial<Pick<User, 'name' | 'email'>>;
export type GetUserProfileDTO = Omit<User, 'password'>;
export declare const RegisterDTOSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export declare const LoginDTOSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=user.dto.d.ts.map