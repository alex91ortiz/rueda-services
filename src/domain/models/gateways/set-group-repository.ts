import { AddGroupParams } from "@/domain/models/group";

export const SET_GROUP_REPOSITORY = "SET_GROUP_REPOSITORY";

export interface ISetGroupRepository {
    updateGroupRepository: (id: string | number, data : AddGroupParams) => Promise<void>;
    deleteGroupRepository: (id: string | number) => Promise<void>;
}