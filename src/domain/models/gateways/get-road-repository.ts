import { RoadModel } from "@/domain/models/road";

export const GET_ROAD_REPOSITORY = "GET_ROAD_REPOSITORY";

export interface IGetRoadRepository {
    getRoadsRepository(location: IGetRoadRepository.Params): Promise<RoadModel[]>;
    
    getRoadByIdRepository(id: string): Promise<RoadModel>;

    getRoadsByUserRepository(id: string, status: number): Promise<RoadModel[]>;
}

export namespace IGetRoadRepository{
    export type Params = {
        latitude: number;
        longitude: number;
        country: string;
        city: string;
    }
}