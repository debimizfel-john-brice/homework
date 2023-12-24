import { ResourceNotFoundError, ValidationError } from "../2-models/client-errors";
import dal from "../4-utils/dal";
import CategoryModel from "../2-models/category-model";
import ProductModel from "../2-models/product-model";
import { OkPacket } from "mysql";


// Get all Categories:
async function getAllCategories():Promise<CategoryModel[]>{
    const sql = "SELECT categoryId AS id, categoryName AS name FROM categories";
    const data = await dal.execute(sql);
    return data;
}


// Get Products By Category:
async function getProductsByCategory(categoryId:number):Promise<ProductModel[]>{
    const sql = `SELECT * FROM products WHERE categoryId = ?`;
    const products = await dal.execute(sql, [categoryId]);
    return products;
}


// Add one Product:
async function addProducts( product:ProductModel ):Promise<ProductModel>{
    // validation:
    const sql = `INSERT INTO products VALUES(DEFAULT, ?, ?, ?, ?, ? )`;
    const result:OkPacket = await dal.execute(sql, [product.name, product.productionTime, product.expiryTime, product.categoryId, product.price ]);
    product.id = result.insertId;
    return product;
}


// Delete one product:
async function deleteProduct(id:number):Promise<void>{
    const sql = "DELETE FROM products WHERE id = ?";
    const result:OkPacket = await dal.execute(sql, [id]);
    if( !result.affectedRows ) throw new ResourceNotFoundError(id);
}


export default {
    getAllCategories,
    getProductsByCategory,
    addProducts,
    deleteProduct
}