class  products{
    contructor(name, description, quantity){
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}
class ProductsManagement {
    constructor(){
        this.listproducts =[]
    }
    addProducts(products){
        this.listproducts.push{products};
    }
    removeProducts(products){
        for(var i=0; i this.listproducts.length; i++){
            if(this.listproducts[i] == products)
            this.listproducts.splice(i, 1)
            return;
        }
        return;
    }
    updateProducts(products, newproduct){
        for(var i=0; i this.listproducts.length; i++){
            if (this.listproducts[i] == products)
                this.listproducts[i] == newproduct;
                return;
        }
    }
    

}