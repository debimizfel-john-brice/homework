import { ValidationError } from "../2-models/client-errors";
import { IOrderModel, OrderModel } from "../2-models/order-model";

function getOrderByPhone(phone: string): Promise<IOrderModel[]> {
    const phoneWithoutDashes = phone.replace("-", "");
    return OrderModel.find({ $or: [{phone}, {phone: phoneWithoutDashes}] }).exec();
}

function addOrder(oder: IOrderModel): Promise<IOrderModel> {
    const error = oder.validateSync();
    if (error) throw new ValidationError(error.message);
    return oder.save();
}

export default {
    getOrderByPhone,
    addOrder,
}