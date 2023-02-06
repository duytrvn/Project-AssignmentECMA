// import data from "../../db.json" assert { type: "json" };
import Header from "../js/header";
import Breadcrumbs from "../breadcumbs/breadcrums";
import Navigation from "../js/navigation";
import SlideShow from "../slideshows/slideshow";
import Listfilter from "../js/listfilter";
import Footer from "../js/footer";

var ProductPage = function() {
    return /*html*/`
    <div class = "container">
        ${Header()}
        ${Breadcrumbs()}

        <main class ="home"> 
            
        </main>

        
            ${Footer()}
        
    </div>
    `
}

export default ProductPage;

