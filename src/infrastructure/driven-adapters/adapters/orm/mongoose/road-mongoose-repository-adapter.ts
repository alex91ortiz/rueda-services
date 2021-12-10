import { IAddRoadRepository } from "@/domain/models/gateways/add-road-repository";
import { IGetRoadRepository } from "@/domain/models/gateways/get-road-repository";
import { ISetRoadRepository } from "@/domain/models/gateways/set-road-repository";
import {AddRoadParams, RoadModel} from "@/domain/models/road";
import {RoadModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/road";

export class RoadMongooseRepositoryAdapter implements IAddRoadRepository, IGetRoadRepository, ISetRoadRepository {

    async getRoadsByUserRepository(id: string): Promise<RoadModel[]> {
        return await RoadModelSchema.find({"creator._id": id});
    }
    async getRoadsRepository(location: IGetRoadRepository.Params): Promise<RoadModel[]> {
       return await RoadModelSchema.find({"creator.information.country": location.country, "creator.information.city": location.city});
    }
    async getRoadByIdRepository(id: string): Promise<RoadModel> {
        return await RoadModelSchema.findById(id).exec();
    }
    async addRoadRepository(data: AddRoadParams) : Promise<RoadModel>{
        return await RoadModelSchema.create(data);
    }
    async updateRoadRepository(id: string | number, data: AddRoadParams) : Promise<void>{
        await RoadModelSchema.findOneAndUpdate({ _id: id}, data, {upsert: true});
    };
    async  deleteRoadRepository(id: string | number) : Promise<void>{
        await RoadModelSchema.deleteOne({_id:id});
    }
}
