import { IAddGroupRepository } from "@/domain/models/gateways/add-group-repository";
import { IGetGroupRepository } from "@/domain/models/gateways/get-group-repository";
import { ISetGroupRepository } from "@/domain/models/gateways/set-group-repository";
import {AddGroupParams, GroupModel} from "@/domain/models/group";
import {GroupModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/group";

export class GroupMongooseRepositoryAdapter implements IAddGroupRepository, IGetGroupRepository, ISetGroupRepository {

    async getGroupsByUserRepository(id: string, status: number): Promise<GroupModel[]> {
        return await GroupModelSchema.find({"creator._id": id, "status": status});
    }
    async getGroupByIdRepository(id: string): Promise<GroupModel> {
        return await GroupModelSchema.findById(id).exec();
    }
    async addGroupRepository(data: AddGroupParams) : Promise<GroupModel>{
        return await GroupModelSchema.create(data);
    }
    async updateGroupRepository(id: string | number, data: AddGroupParams) : Promise<void>{
        await GroupModelSchema.findOneAndUpdate({ _id: id}, data, {upsert: true});
    };
    async  deleteGroupRepository(id: string | number) : Promise<void>{
        await GroupModelSchema.deleteOne({_id:id});
    }
}
