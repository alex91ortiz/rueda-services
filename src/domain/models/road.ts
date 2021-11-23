export type RoadModel = {
    id: number | string;
    to: { 
        address: string;
        lon: number;
        lat: number; 
    };
    from: { 
        address: string;
        lon: number;
        lat: number; 
    };
    startDate: string;
    startTime: string;
    duration: number;
    name: string;
    description: string;
    users: [];
    groups: [];
}

export type AddRoadParams = Omit<RoadModel, 'id'>
