import mongoose from "mongoose";

export interface IRoleType extends mongoose.Document {
    role_type: string;
}

export const RoleTypeSchema = new mongoose.Schema<IRoleType>({
    role_type: {
        type: String,
        required: [true, "Missing role type."],
    },
}, {
    toJSON: { virtuals: true },
    versionKey: false,
    id: false
})

export const RoleType = mongoose.model<IRoleType>("RoleTypeModel", RoleTypeSchema, "roles");
