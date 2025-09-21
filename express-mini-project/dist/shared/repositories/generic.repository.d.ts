export interface DatabaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class GenericRepository<T extends DatabaseEntity> {
    private items;
    findAll(): T[];
    findById(id: string): T | undefined;
    create(item: T): T;
    delete(id: string): boolean;
    update(id: string, updatedItem: Partial<T>): T | undefined;
}
//# sourceMappingURL=generic.repository.d.ts.map