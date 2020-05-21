import {Products, ProductsManagement} from "./products.js";
class Ui{

    constructor(){
        this.uiName = document.getElementById("name");
        this.uiDescription = document.getElementById("description");
        this.uiQuantity = document.getElementById("quantity");
        this.uiForm = document.getElementById("form-data");
        this.container = document.getElementById("container-table");
        this.manager = new ProductsManagement();
        let p1 = new Products("pollo", "pollo sofia", 20);
        let p2 = new Products("galletas", "galletas mabel", 50);
        let p3 = new Products("pollo", "pollo ibma", 50);
        this.manager.addProducts(p1);
        this.manager.addProducts(p2);
        this.manager.addProducts(p3);
        this.loadEvents();
    }
    loadEvents(){
        this.uiForm.addEventListener("submit", (e) =>{
            e.preventDefault();
            this.addProducts(
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value
            );
        });
    }
    loadTable() {
        var html = "";
        for(var i=0; i < this.manager.showProducts().length; i++){
        html +=`
        <tr>
            <td scope="row">${this.manager.showProducts()[i].name}</td>
            <td>${this.manager.showProducts()[i].description}</td>
            <td>${this.manager.showProducts()[i].quantity}</td>
        </tr>'`

        }
        this.container.innerHTML= html;
    }
    addProducts(name, description, quantity){
        let p1 = new Products(name, description, quantity);
        this.manager.addProducts(p1);
        this.loadTable();
    }
}
let ui = new Ui();
ui.loadTable();