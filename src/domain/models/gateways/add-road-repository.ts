import { AddRoadParams, RoadModel } from "@/domain/models/road";

export const ADD_ROAD_REPOSITORY = "ADD_ROAD_REPOSITORY";

export interface IAddRoadRepository {
    addRoadRepository: (data : AddRoadParams) => Promise<RoadModel>;
}