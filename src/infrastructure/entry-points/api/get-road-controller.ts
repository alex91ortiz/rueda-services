import { IGetRoadRepository } from "@/domain/models/gateways/get-road-repository";
import { GET_ROAD_SERVICE, IGetRoadService } from "@/domain/use-cases/get-road-service";
import {Mapping, Get, Inject, Param, Query} from "@tsclean/core";

@Mapping('api/v1/get-road')
export class GetRoadController {

    constructor(
        @Inject(GET_ROAD_SERVICE) private readonly getRoadService: IGetRoadService
    ) {
    }
    

    @Get("/all/:country/:city")
    async getRoadNear(
         @Param("country") country: string, 
         @Param("city") city: string,
         @Query("longitude") longitude: number,
         @Query("latitude") latitude: number,
        ): Promise<any> {
        console.log(longitude,latitude);
        return await this.getRoadService.getRoads({
            country,
            city,
            longitude,
            latitude
        });
    }

    @Get("/:id")
    async getRoadById(@Param("id") id: string): Promise<any> {
        return await this.getRoadService.getRoadById(id);
    }

    @Get("/user/:id/:status")
    async getRoadsByUser(@Param("id") id: string, @Param("status") status: number): Promise<any> {
        return await this.getRoadService.getRoadsByUser(id, status);
    }
    

}
