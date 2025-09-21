import { Request, Response } from 'express';
export declare class UserController {
    private _userService;
    getUsers: (req: Request<{}, {}, {}, {
        page: string;
        limit: string;
    }>, res: Response) => void;
    getUser: (req: Request<{
        uid: string;
    }>, res: Response) => Response<any, Record<string, any>> | undefined;
    createUser: (req: Request, res: Response) => void;
    updateUser: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    deleteUser: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=user.controller.d.ts.map