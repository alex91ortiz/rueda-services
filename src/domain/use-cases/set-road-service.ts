import { AddRoadParams, RoadModel } from "@/domain/models/road";

export const SET_USER_SERVICE = "SET_USER_SERVICE";

export interface ISetRoadService {
    updateRoad: (id: string | number,data: AddRoadParams) => Promise<void>;
    deleteRoad: (id: string | number)  => Promise<void>;
}