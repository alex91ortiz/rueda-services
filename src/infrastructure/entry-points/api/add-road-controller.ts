import {Mapping, Inject, Post, Body} from "@tsclean/core";
import {AddRoadServiceImpl} from "@/domain/use-cases/impl/add-road-service-impl";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-road-service";
import { AddRoadParams } from "@/domain/models/road";

@Mapping('api/v1/add-road')
export class AddRoadController {

    constructor(
       @Inject(ADD_USER_SERVICE) private readonly addRoadService: AddRoadServiceImpl
    ) {
    }
    
    
    @Post()
    async addRoadController(@Body() data: AddRoadParams): Promise<any> {
        return this.addRoadService.addRoad(data);
    }
}
