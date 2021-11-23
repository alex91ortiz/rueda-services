import { ADD_ROAD_REPOSITORY } from "@/domain/models/gateways/add-road-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-road-service";
import { AddRoadServiceImpl } from "@/domain/use-cases/impl/add-road-service-impl";
import { RoadMongooseRepositoryAdapter } from "../adapters/orm/mongoose/road-mongoose-repository-adapter";

export const adapters = [
    {
        useClass: RoadMongooseRepositoryAdapter,
        provide: ADD_ROAD_REPOSITORY
    },
];

export const services = [
    {
        useClass: AddRoadServiceImpl,
        provide: ADD_USER_SERVICE
    }
];
