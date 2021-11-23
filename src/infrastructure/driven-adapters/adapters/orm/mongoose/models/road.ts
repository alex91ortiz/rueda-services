import { RoadModel } from '@/domain/models/road';
import { model, Schema } from "mongoose";

const schema = new Schema<RoadModel>({
    id: String,
    to: { 
        address: String,
        lon: Number,
        lat: Number, 
    },
    from: { 
        address: String,
        lon: Number,
        lat: Number, 
    },
    startDate: String,
    startTime: String,
    duration: Number,
    name: String,
    description: String,
    users: [],
    groups: []
});

export const RoadModelSchema = model<RoadModel>('roads', schema);