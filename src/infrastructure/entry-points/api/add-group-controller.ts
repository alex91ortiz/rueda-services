import {Mapping, Inject, Post, Body} from "@tsclean/core";
import {AddGroupServiceImpl} from "@/domain/use-cases/impl/add-group-service-impl";
import { ADD_GROUP_SERVICE } from "@/domain/use-cases/add-group-service";
import { AddGroupParams } from "@/domain/models/group";

@Mapping('api/v1/add-group')
export class AddGroupController {

    constructor(
       @Inject(ADD_GROUP_SERVICE) private readonly addGroupService: AddGroupServiceImpl
    ) {
    }
    
    
    @Post()
    async addGroupController(@Body() data: AddGroupParams): Promise<any> {
        return this.addGroupService.addGroup(data);
    }
}
