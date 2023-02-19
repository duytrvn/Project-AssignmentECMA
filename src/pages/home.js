import data from "../../db.json" assert { type: "json" };
import Header from "../js/header";
import Breadcrumbs from "../js/breadcrums";
import Navigation from "../js/navigation";
import SlideShow from "../js/slideshow";
import Listfilter from "../js/listfilter";
import Footer from "../js/footer";
import { useEffect , useState } from "../../lib";

var HomePage = function() {
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            setData(data)
        })
    }, []) // Tham số xác định trạng thái render lại components
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
                ${data.map(function (book) {
                return /*html*/ `
                    <a href="/products/${book.id}">
                        <div class="prd">
                            <div class="prd-img">
                            <img src="${book.images[0].base_url}"/>
                            </div>
                                <h3> ${book.name}</h3>
                                <div class ="evaluate"> 
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                        <p> | ${book.quantity_sold?.text}</p>
                        </div>
                                <p style="color:red;font-weight:bold;">${book.original_price} đ</p>
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