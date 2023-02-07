import data from "../../db2.json" assert { type: "json" };
import Header from "../js/header";
import Breadcrumbs from "../js/breadcrums";
import Navigation from "../js/navigation";
import SlideShow from "../js/slideshow";
import Listfilter from "../js/listfilter";
import Footer from "../js/footer";

var HomePage = function() {
    return /*html*/ `
    <div class = "container">
        ${Header()}
        ${Breadcrumbs()}

        <main class ="home"> 
            <article class ="content-home">
                ${Navigation()}
            </article>

            <aside> 
                <div class="contentt">
                ${SlideShow()}

                ${Listfilter()}

                <div class="grid grid-cols-4 gap-2">
                ${data.map(function (book, index) {
                return /*html*/ `
                    <a href="/products/${book.id}">
                        <div class="prd">
                            <div class="prd-img">
                                <img src="${book.images[0].base_url}"/>
                            </div>
                                <h3>${book.name}</h3>
                        </div>
                    </a>
                    `;
                }).join("")}
                </div>
                </div>

            </aside>
        </main>

        
            ${Footer()}
        
    </div>
    `;
};
export default HomePage;