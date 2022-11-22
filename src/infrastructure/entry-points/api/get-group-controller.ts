import { GET_GROUP_SERVICE, IGetGroupService } from "@/domain/use-cases/get-group-service";
import {Mapping, Get, Inject, Param, Query} from "@tsclean/core";

@Mapping('api/v1/get-group')
export class GetGroupController {

    constructor(
        @Inject(GET_GROUP_SERVICE) private readonly getGroupService: IGetGroupService
    ) {
    }
    
    @Get("/:id")
    async getGroupById(@Param("id") id: string): Promise<any> {
        return await this.getGroupService.getGroupById(id);
    }

    @Get("/user/:id/:status")
    async getGroupsByUser(@Param("id") id: string, @Param("status") status: number): Promise<any> {
        return await this.getGroupService.getGroupsByUser(id, status);
    }
    

}
