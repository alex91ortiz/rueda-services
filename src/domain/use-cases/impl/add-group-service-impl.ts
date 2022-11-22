import { Inject, Service} from "@tsclean/core";
import {IAddGroupService} from "@/domain/use-cases/add-group-service";
import { AddGroupParams, GroupModel } from "@/domain/models/group";
import { ADD_GROUP_REPOSITORY, IAddGroupRepository } from "@/domain/models/gateways/add-group-repository";

@Service()
export class AddGroupServiceImpl implements IAddGroupService {
    constructor
    (
        @Inject(ADD_GROUP_REPOSITORY) private readonly addGroupRepository: IAddGroupRepository
    ) {
        
    }
    async addGroup(data: AddGroupParams): Promise<GroupModel>{
        return await this.addGroupRepository.addGroupRepository(data);
    }
}