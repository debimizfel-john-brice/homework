class ProductModel{

    public id:number;
    public name:string;
    public productionTime:string;
    public expiryTime:string;
    public categoryId :number;
    public price :number;

    public constructor( product:ProductModel ){
        this.id = product.id;
        this.name = product.name;
        this.productionTime = product.productionTime;
        this.expiryTime = product.expiryTime;
        this.categoryId = product.categoryId;
        this.price = product.price;
    }

    // ... validation:

}
export default ProductModel