import { AddRoadParams } from "@/domain/models/road";

export const SET_ROAD_REPOSITORY = "SET_ROAD_REPOSITORY";

export interface ISetRoadRepository {
    updateRoadRepository: (id: string | number, data : AddRoadParams) => Promise<void>;
    deleteRoadRepository: (id: string | number) => Promise<void>;
}