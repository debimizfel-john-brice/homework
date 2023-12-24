import { OkPacket } from "mysql";
import FurnitureModel from "../2-models/furniture_model";
import dal from "../4-utils/dal";
import { ResourceNotFound } from "../2-models/error_status";

async function getFurnitureTypes(): Promise<FurnitureModel[]> {
    return await dal.execute("SELECT * FROM furnitureTypes");
}

async function getFurnitures(): Promise<FurnitureModel> {
    return await dal.execute("SELECT * FROM furnitures");
}

async function addFurniture(furniture: FurnitureModel): Promise<FurnitureModel> {
    const result: OkPacket = await dal.execute(
        "INSERT INTO furnitures (typeId, dimensions, color, price) VALUES (?, ?, ?, ?)",
        furniture.typeId,
        furniture.dimensions,
        furniture.color,
        furniture.price
    );
    furniture.furnitureId = result.insertId;
    return furniture;
    // return {
    //     ...furniture,
    //     furnitureId: furniture.furnitureId,
    // };
}

async function updateFurniture(furniture: FurnitureModel): Promise<FurnitureModel> {
    const result: OkPacket = await dal.execute(
        "UPDATE furnitures SET typeId = ?, dimensions = ?, color = ?, price = ? WHERE furnitureId = ?",
        furniture.typeId,
        furniture.dimensions,
        furniture.color,
        furniture.price,
        furniture.furnitureId
    );
    if (!result.affectedRows) throw new ResourceNotFound(furniture.furnitureId);
    return furniture;
}


async function deleteFurniture(furnitureId: number): Promise<void> {
    const result: OkPacket = await dal.execute("DELETE FROM furnitures WHERE furnitureId = ?", furnitureId);
    if (!result.affectedRows) throw new ResourceNotFound(furnitureId);
}

export default {
    getFurnitureTypes,
    getFurnitures,
    addFurniture,
    updateFurniture,
    deleteFurniture
};