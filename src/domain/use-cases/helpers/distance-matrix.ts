export const DISTANCE_MATRIX = "DISTANCE_MATRIX";

export interface IDistanceMatrix {
    getDistances (data: IDistanceMatrix.Params): Promise<any>;
}

export namespace IDistanceMatrix {
    export type Params = {
        origins: [],
        destinations: []
    }
}