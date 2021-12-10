import { IGetRoadRepository } from "../models/gateways/get-road-repository";
import { RoadModel } from "../models/road";

export const GET_ROAD_SERVICE = "GET_ROAD_SERVICE";

export interface IGetRoadService {
    getRoads(location: IGetRoadRepository.Params): Promise<RoadModel[]>;
    getRoadById(id: string): Promise<RoadModel>;
    getRoadsByUser(id: string): Promise<RoadModel[]>;
}