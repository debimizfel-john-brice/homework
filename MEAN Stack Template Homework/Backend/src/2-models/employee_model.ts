import mongoose from "mongoose";
import {RoleType, IRoleType } from "./role_type_model";

export interface IEmployee extends mongoose.Document {
    first_name: string;
    last_name: string;
    address: string;
    date_of_hire: Date;
    role_type_id: mongoose.Types.ObjectId;
    role?: IRoleType;
}

export const EmployeeSchema = new mongoose.Schema<IEmployee>({
    role_type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoleType",
        required: [true, "Missing role type id."]
    },
    first_name: {
        type: String,
        required: [true, "Missing first name."]
    },
    last_name: {
        type: String,
        required: [true, "Missing last name."]
    },
    address: {
        type: String,
        required: [true, "Missing address."]
    },
    date_of_hire: {
        type: Date,
        required: [true, "Missing date of hire."]
    },
}, {
    toJSON: { virtuals: true },
    versionKey: false,
    id: false
})

EmployeeSchema.virtual("role", {
    ref: RoleType,
    localField: "role_type_id",
    foreignField: "_id",
    justOne: true
})

export const Employee = mongoose.model<IEmployee>("Employee", EmployeeSchema, "employees");