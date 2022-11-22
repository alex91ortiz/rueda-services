import { Inject, Service} from "@tsclean/core";
import { AddGroupParams } from "@/domain/models/group";
import { SET_GROUP_REPOSITORY, ISetGroupRepository } from "@/domain/models/gateways/set-group-repository";
import { ISetGroupService } from "../set-group-service";

@Service()
export class SetGroupServiceImpl implements ISetGroupService {
    constructor
    (
        @Inject(SET_GROUP_REPOSITORY) private readonly setGroupRepository: ISetGroupRepository
    ) {}
    
    async updateGroup(id: string | number, data: AddGroupParams): Promise<void>{
         await this.setGroupRepository.updateGroupRepository(id, data);
    }

    async deleteGroup(id: string | number): Promise<void>{
        await this.setGroupRepository.deleteGroupRepository(id);
    }

}