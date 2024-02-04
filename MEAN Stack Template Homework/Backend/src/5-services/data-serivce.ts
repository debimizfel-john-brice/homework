import { ResourceNotFoundError, ValidationError } from "../2-models/client-errors";
import { DataModel, IDataModel } from "../2-models/data-model";

//TODO delete this file
// Get all from database:
function getAllData(): Promise<IDataModel[]> {
    return DataModel.find().exec();
}


// Get one:
async function getOneData(_id: string): Promise<IDataModel> {
    const product = await DataModel.findById(_id).exec();
    if (!product) throw new ResourceNotFoundError(_id);
    return product;
}


// Add:
function addData(data: IDataModel): Promise<IDataModel> {
    const errors = data.validateSync();
    if (errors) throw new ValidationError(errors.message);
    return data.save();
}


// Update: 
async function updateData(data: IDataModel): Promise<IDataModel> {
    const errors = data.validateSync();
    if (errors) throw new ValidationError(errors.message);
    const updatedProduct = await DataModel.findByIdAndUpdate(data._id, data, { returnOriginal: false }).exec();
    if (!updatedProduct) throw new ResourceNotFoundError(data._id);
    return updatedProduct;
}


// Delete::
async function deleteData(_id: string): Promise<void> {
    const deleted = await DataModel.findByIdAndDelete(_id).exec();
    if (!deleted) throw new ResourceNotFoundError(_id);
}


export default {
    getAllEvents: getAllData,
    getOneData,
    addData,
    updateData,
    deleteData
}