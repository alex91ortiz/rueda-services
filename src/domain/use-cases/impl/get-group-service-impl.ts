import {Inject, Service} from "@tsclean/core";
import {IGetGroupService} from "@/domain/use-cases/get-group-service";
import { GET_GROUP_REPOSITORY, IGetGroupRepository } from "@/domain/models/gateways/get-group-repository";
import { GroupModel } from "@/domain/models/group";

@Service()
export class GetGroupServiceImpl implements IGetGroupService {
    constructor(
        @Inject(GET_GROUP_REPOSITORY) private readonly getGroupRepository: IGetGroupRepository
    ) {}
    async getGroupsByUser(id: string, status: number): Promise<GroupModel[]> {
        return await this.getGroupRepository.getGroupsByUserRepository(id, status);
    }
    async getGroupById(id: string): Promise<GroupModel> {
        return await this.getGroupRepository.getGroupByIdRepository(id);
    }
}