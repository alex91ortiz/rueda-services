import {Mapping, Inject, Body, Put, Param, Delete} from "@tsclean/core";

import { AddGroupParams } from "@/domain/models/group";
import { SET_GROUP_SERVICE } from "@/domain/use-cases/set-group-service";
import { SetGroupServiceImpl } from "@/domain/use-cases/impl/set-group-service-impl";

@Mapping('api/v1/set-group')
export class SetGroupController {

    constructor(
       @Inject(SET_GROUP_SERVICE) private readonly setGroupService: SetGroupServiceImpl
    ) {
    }
    
    @Put("/:id")
    async setGroupController(@Param("id") id : string, @Body() data: AddGroupParams): Promise<any> {
        await this.setGroupService.updateGroup(id, data);
    }

    @Delete("/:id")
    async reomveGroupController(@Param("id") id : string): Promise<any> {
        await this.setGroupService.deleteGroup(id);
    }
}
