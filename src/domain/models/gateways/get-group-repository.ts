import { GroupModel } from "@/domain/models/group";

export const GET_GROUP_REPOSITORY = "GET_GROUP_REPOSITORY";

export interface IGetGroupRepository {
    
    getGroupByIdRepository(id: string): Promise<GroupModel>;

    getGroupsByUserRepository(id: string, status: number): Promise<GroupModel[]>;
}