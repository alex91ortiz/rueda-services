import { UserModel } from "@/domain/models/user";

export type RoadModel = {
    id: number | string;
    to: { 
        address: string;
        longitude: number;
        latitude: number; 
    };
    from: { 
        address: string;
        longitude: number;
        latitude: number; 
    };
    startDate: string;
    startTime: string;
    duration: number;
    distance: number;
    period: number;
    name: string;
    description: string;
    users: [];
    groups: [];
    creator: UserModel;
}

export type AddRoadParams = Omit<RoadModel, 'id'>
