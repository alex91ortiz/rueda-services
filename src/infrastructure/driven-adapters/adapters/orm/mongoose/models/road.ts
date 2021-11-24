import { RoadModel } from '@/domain/models/road';
import { UserModel } from '@/domain/models/user';
import { model, Schema } from "mongoose";

const schema = new Schema<RoadModel>({
    id: String,
    to: { 
        address: String,
        longitude: Number,
        latitude: Number, 
    },
    from: { 
        address: String,
        longitude: Number,
        latitude: Number, 
    },
    startDate: String,
    startTime: String,
    duration: Number,
    name: String,
    description: String,
    users: [],
    groups: [],
    creator: {}
});

export const RoadModelSchema = model<RoadModel>('roads', schema);