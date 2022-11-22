import { UserModel } from "@/domain/models/user";

export type GroupModel = {
    id: number | string;
    name: string;
    description: string;
    roads: [];
    creator: UserModel;
    status: number;
}

export type AddGroupParams = Omit<GroupModel, 'id'>
