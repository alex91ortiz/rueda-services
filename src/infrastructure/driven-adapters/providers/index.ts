import { ADD_GROUP_REPOSITORY } from "@/domain/models/gateways/add-group-repository";
import { ADD_ROAD_REPOSITORY } from "@/domain/models/gateways/add-road-repository";
import { GET_GROUP_REPOSITORY } from "@/domain/models/gateways/get-group-repository";
import { GET_ROAD_REPOSITORY } from "@/domain/models/gateways/get-road-repository";
import { SET_GROUP_REPOSITORY } from "@/domain/models/gateways/set-group-repository";
import { SET_ROAD_REPOSITORY } from "@/domain/models/gateways/set-road-repository";
import { ADD_GROUP_SERVICE } from "@/domain/use-cases/add-group-service";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-road-service";
import { GET_GROUP_SERVICE } from "@/domain/use-cases/get-group-service";
import { GET_ROAD_SERVICE } from "@/domain/use-cases/get-road-service";
import { AddGroupServiceImpl } from "@/domain/use-cases/impl/add-group-service-impl";
import { AddRoadServiceImpl } from "@/domain/use-cases/impl/add-road-service-impl";
import { GetGroupServiceImpl } from "@/domain/use-cases/impl/get-group-service-impl";
import { GetRoadServiceImpl } from "@/domain/use-cases/impl/get-road-service-impl";
import { SetGroupServiceImpl } from "@/domain/use-cases/impl/set-group-service-impl";
import { SetRoadServiceImpl } from "@/domain/use-cases/impl/set-road-service-impl";
import { SET_GROUP_SERVICE } from "@/domain/use-cases/set-group-service";
import { SET_USER_SERVICE } from "@/domain/use-cases/set-road-service";
import { GroupMongooseRepositoryAdapter } from "../adapters/orm/mongoose/group-mongoose-repository-adapter";
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
    {
        useClass: GroupMongooseRepositoryAdapter,
        provide: ADD_GROUP_REPOSITORY
    },
    {
        useClass: GroupMongooseRepositoryAdapter,
        provide: GET_GROUP_REPOSITORY
    },
    {
        useClass: GroupMongooseRepositoryAdapter,
        provide: SET_GROUP_REPOSITORY
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
    },
    {
        useClass: AddGroupServiceImpl,
        provide: ADD_GROUP_SERVICE
    },
    {
        useClass: GetGroupServiceImpl,
        provide: GET_GROUP_SERVICE
    },
    {
        useClass: SetGroupServiceImpl,
        provide: SET_GROUP_SERVICE
    }
];
