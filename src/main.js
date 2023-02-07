import "boxicons";
import { render } from "../lib";
import HomePage from "./pages/home";
import Navigo from "navigo";
import ProductPage from "./pages/products";
import "./style/main.css";
import "./style/navigation.css"
import "./style/header.css"
import "./style/breadcrumbs.css"
import "./style/breadcrumbs-details.css"
import "./style/slideshow.css"
import "./style/listfilter.css"
import "./style/products.css"
import "./style/footer.css"

//DOM declaration

var app = document.querySelector("#app");

const router = new Navigo("/", { linksSelector: "a" });

router.on("/", function() {
    render(HomePage(), app);
});

router.on('/products/:id', function({data}) {
    render(ProductPage(data.id), app)
})


router.resolve();