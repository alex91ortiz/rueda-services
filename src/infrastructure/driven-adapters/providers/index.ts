import { ADD_ROAD_REPOSITORY } from "@/domain/models/gateways/add-road-repository";
import { GET_ROAD_REPOSITORY } from "@/domain/models/gateways/get-road-repository";
import { SET_ROAD_REPOSITORY } from "@/domain/models/gateways/set-road-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-road-service";
import { GET_ROAD_SERVICE } from "@/domain/use-cases/get-road-service";
import { AddRoadServiceImpl } from "@/domain/use-cases/impl/add-road-service-impl";
import { GetRoadServiceImpl } from "@/domain/use-cases/impl/get-road-service-impl";
import { SetRoadServiceImpl } from "@/domain/use-cases/impl/set-road-service-impl";
import { SET_USER_SERVICE } from "@/domain/use-cases/set-road-service";
import { RoadMongooseRepositoryAdapter } from "../adapters/orm/mongoose/road-mongoose-repository-adapter";

export const adapters = [
    {
        useClass: RoadMongooseRepositoryAdapter,
        provide: ADD_ROAD_REPOSITORY
    },
    {
        useClass: RoadMongooseRepositoryAdapter,
        provide: GET_ROAD_REPOSITORY
    },
    {
        useClass: RoadMongooseRepositoryAdapter,
        provide: SET_ROAD_REPOSITORY
    },
];

export const services = [
    {
        useClass: AddRoadServiceImpl,
        provide: ADD_USER_SERVICE
    },
    {
        useClass: GetRoadServiceImpl,
        provide: GET_ROAD_SERVICE
    },
    {
        useClass: SetRoadServiceImpl,
        provide: SET_USER_SERVICE
    }
];
