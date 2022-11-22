import { GroupModel } from "../models/group";

export const GET_GROUP_SERVICE = "GET_GROUP_SERVICE";

export interface IGetGroupService {
    
    getGroupById(id: string): Promise<GroupModel>;
    getGroupsByUser(id: string, status: number): Promise<GroupModel[]>;
}