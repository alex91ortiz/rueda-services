import { AddGroupParams, GroupModel } from "@/domain/models/group";

export const ADD_GROUP_REPOSITORY = "ADD_GROUP_REPOSITORY";

export interface IAddGroupRepository {
    addGroupRepository: (data : AddGroupParams) => Promise<GroupModel>;
}