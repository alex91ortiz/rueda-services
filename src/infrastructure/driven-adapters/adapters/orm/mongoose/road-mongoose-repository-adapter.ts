import { IAddRoadRepository } from "@/domain/models/gateways/add-road-repository";
import { IGetRoadRepository } from "@/domain/models/gateways/get-road-repository";
import {AddRoadParams, RoadModel} from "@/domain/models/road";
import {RoadModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/road";

export class RoadMongooseRepositoryAdapter implements IAddRoadRepository, IGetRoadRepository {
    async getRoadsRepository(location: IGetRoadRepository.Params): Promise<RoadModel[]> {
       return await RoadModelSchema.find({"creator.information.country": location.country, "creator.information.city": location.city});
    }
    async getRoadByIdREpository(id: string): Promise<RoadModel> {
        return await RoadModelSchema.findById(id).exec();
    }
    async addRoadRepository(data: AddRoadParams) : Promise<RoadModel>{
        return await RoadModelSchema.create(data);
    }
}
