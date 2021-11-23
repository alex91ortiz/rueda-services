import { AddRoadParams, RoadModel } from "@/domain/models/road";

export const ADD_USER_SERVICE = "ADD_USER_SERVICE";

export interface IAddRoadService {
    addRoad: (data: AddRoadParams) => Promise<RoadModel>;
}