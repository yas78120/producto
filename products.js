class Products{
    constructor(name, description, quantity){
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}
class ProductsManagement {
    constructor(){
        this.listProducts = []
    }
    addProducts(product){
        this.listProducts.push(product);
    }
    removeProducts(product){
        for(var i=0; i < this.listProducts.length; i++){
            if(this.listProducts[i] == product){
                this.listProducts.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateProducts(product, newProduct){
        for(var i=0; i < this.listProducts.length; i++){
            if (this.listProducts[i] == product){
                this.listProducts[i] = newProduct;
                return;
            }
        }
    }
    showProducts(){
        return this.listProducts;
    }
}
export {Products, ProductsManagement}