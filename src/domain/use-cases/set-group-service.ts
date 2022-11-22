import { AddGroupParams, GroupModel } from "@/domain/models/group";

export const SET_GROUP_SERVICE = "SET_GROUP_SERVICE";

export interface ISetGroupService {
    updateGroup: (id: string | number,data: AddGroupParams) => Promise<void>;
    deleteGroup: (id: string | number)  => Promise<void>;
}