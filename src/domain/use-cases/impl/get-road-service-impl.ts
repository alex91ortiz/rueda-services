import {Inject, Service} from "@tsclean/core";
import {IGetRoadService} from "@/domain/use-cases/get-road-service";
import { GET_ROAD_REPOSITORY, IGetRoadRepository } from "@/domain/models/gateways/get-road-repository";
import { RoadModel } from "@/domain/models/road";

@Service()
export class GetRoadServiceImpl implements IGetRoadService {
    constructor(
        @Inject(GET_ROAD_REPOSITORY) private readonly getRoadRepository: IGetRoadRepository
    ) {}
    async getRoads(location: IGetRoadRepository.Params): Promise<RoadModel[]> {
        const roads = await this.getRoadRepository.getRoadsRepository(location);
        return roads;
    }
    async getRoadById(id: string): Promise<RoadModel> {
        return await this.getRoadRepository.getRoadByIdREpository(id);
    }
}