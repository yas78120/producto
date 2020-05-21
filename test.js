import {Products, ProductsManagement} from "./products.js";

let p1 = new Products("pollo", "pollo sofia", 20);
let p2 = new Products("galletas", "galletas mabel", 50);
let p3 = new Products("pollo", "pollo ibma", 50);
let manager = new ProductsManagement();
manager.addProducts(p1);
manager.addProducts(p2);
manager.removeProducts(p1);
manager.updateProducts(p1, p3);
console.log(manager.showProducts());
