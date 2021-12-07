import {Mapping, Inject, Body, Put, Param, Delete} from "@tsclean/core";

import { AddRoadParams } from "@/domain/models/road";
import { SET_USER_SERVICE } from "@/domain/use-cases/set-road-service";
import { SetRoadServiceImpl } from "@/domain/use-cases/impl/set-road-service-impl";

@Mapping('api/v1/set-road')
export class SetRoadController {

    constructor(
       @Inject(SET_USER_SERVICE) private readonly setRoadService: SetRoadServiceImpl
    ) {
    }
    
    @Put("/:id")
    async setRoadController(@Param("id") id : string, @Body() data: AddRoadParams): Promise<any> {
        await this.setRoadService.updateRoad(id, data);
    }

    @Delete("/:id")
    async reomveRoadController(@Param("id") id : string): Promise<any> {
        await this.setRoadService.deleteRoad(id);
    }
}
