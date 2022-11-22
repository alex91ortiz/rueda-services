import { GroupModel } from '@/domain/models/group';
import { model, Schema } from "mongoose";

const schema = new Schema<GroupModel>({
    id: String,
    name: String,
    description: String,
    roads: [],
    creator: {},
    status: Number,
});

export const GroupModelSchema = model<GroupModel>('groups', schema);