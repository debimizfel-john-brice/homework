export default class FurnitureModel {
    public furnitureId: number;
    public typeId: number;
    public dimensions: string;
    public color: string;
    public price: number;

    constructor(furniture: { furnitureId: number, typeId: number, dimensions: string, color: string, price: number }) {
        this.furnitureId = furniture.furnitureId;
        this.typeId = furniture.typeId;
        this.dimensions = furniture.dimensions;
        this.color = furniture.color;
        this.price = furniture.price;
    }
}

