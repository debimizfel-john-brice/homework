import { ResourceNotFoundError, ValidationError } from "../2-models/client-errors";
import { IProductModel, ProductModel } from "../2-models/product-model";


// Get all products from database:
function getAllProducts():Promise<IProductModel[]>{
    return ProductModel.find().exec();
}


// Get one product:
async function getOneProduct(_id:string):Promise<IProductModel>{
    const product = await ProductModel.findById(_id).exec();
    if( !product ) throw new ResourceNotFoundError(_id);
    return product;
}


// Add product:
function addProduct(product:IProductModel):Promise<IProductModel>{
    const errors = product.validateSync();
    if(errors) throw new ValidationError(errors.message);
    return product.save();
}


// Update product: -> { returnOriginal: false } 
async function updateProduct(product:IProductModel):Promise<IProductModel>{
    const errors = product.validateSync();
    if(errors) throw new ValidationError(errors.message);
    const updatedProduct = await ProductModel.findByIdAndUpdate(product._id, product, { returnOriginal: false } ).exec();
    if(!updatedProduct) throw new ResourceNotFoundError(product._id);
    return updatedProduct;
}


// Delete product:
async function deleteProduct(_id:string):Promise<void>{
    const deletedProduct = await ProductModel.findByIdAndDelete(_id).exec();
    if(!deletedProduct) throw new ResourceNotFoundError(_id);
}


export default {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
}