import { IAddRoadRepository } from "@/domain/models/gateways/add-road-repository";
import {AddRoadParams, RoadModel} from "@/domain/models/road";
import {RoadModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/road";

export class RoadMongooseRepositoryAdapter implements IAddRoadRepository {
    async addRoadRepository(data: AddRoadParams) : Promise<RoadModel>{
        return await RoadModelSchema.create(data);
    }
}
