import { Inject, Service} from "@tsclean/core";
import { AddRoadParams } from "@/domain/models/road";
import { SET_ROAD_REPOSITORY, ISetRoadRepository } from "@/domain/models/gateways/set-road-repository";
import { ISetRoadService } from "../set-road-service";

@Service()
export class SetRoadServiceImpl implements ISetRoadService {
    constructor
    (
        @Inject(SET_ROAD_REPOSITORY) private readonly setRoadRepository: ISetRoadRepository
    ) {
        
    }
    
    async updateRoad(id: string | number, data: AddRoadParams): Promise<void>{
         await this.setRoadRepository.updateRoadRepository(id, data);
    }

    async deleteRoad(id: string | number): Promise<void>{
        await this.setRoadRepository.deleteRoadRepository(id);
    }

}