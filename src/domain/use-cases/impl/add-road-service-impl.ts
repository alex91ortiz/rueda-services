import { Inject, Service} from "@tsclean/core";
import {IAddRoadService} from "@/domain/use-cases/add-road-service";
import { AddRoadParams, RoadModel } from "@/domain/models/road";
import { ADD_ROAD_REPOSITORY, IAddRoadRepository } from "@/domain/models/gateways/add-road-repository";

@Service()
export class AddRoadServiceImpl implements IAddRoadService {
    constructor
    (
        @Inject(ADD_ROAD_REPOSITORY) private readonly addRoadRepository: IAddRoadRepository
    ) {
        
    }
    async addRoad(data: AddRoadParams): Promise<RoadModel>{
        return await this.addRoadRepository.addRoadRepository(data);
    }
}