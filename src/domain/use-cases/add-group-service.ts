import { AddGroupParams, GroupModel } from "@/domain/models/group";

export const ADD_GROUP_SERVICE = "ADD_GROUP_SERVICE";

export interface IAddGroupService {
    addGroup: (data: AddGroupParams) => Promise<GroupModel>;
}