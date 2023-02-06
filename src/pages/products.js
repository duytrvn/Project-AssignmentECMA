// import data from "../../db.json" assert { type: "json" };
import Header from "../js/header";
import Breadcrumbsdetails from "../js/breadcrumbs-details";
import Footer from "../js/footer";

var ProductPage = function() {
    return /*html*/`
    <div class = "container">
        ${Header()}
        ${Breadcrumbsdetails()}

        <main class ="home"> 
            
        </main>

        
            ${Footer()}
        
    </div>
    `
}

export default ProductPage;

