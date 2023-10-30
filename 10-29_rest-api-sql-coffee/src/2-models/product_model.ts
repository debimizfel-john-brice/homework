class ProductModel {
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(product: ProductModel) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
    }
}

export default ProductModel;