import "boxicons";
import { render , router} from "../lib";
import HomePage from "./pages/home";
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
import BookUpdate from "./pages/admin/bookUpdate"
import Dashboard from "./pages/admin/dashboard"

// DOM declaration
var app = document.querySelector('#app')

router.on('/', function() {
    render(HomePage, app)
})

// (function(id){
//     ProductPage(id)
// })

router.on('/products/:id', function({data}) {
    // render(ProductPage(data.id), app)
    render(()=>ProductPage(data.id), app)
})

router.on('/admin', function() {
    render(Dashboard, app)
})

router.on('/admin/book/:id', function({data}) {
    render(() => BookUpdate(data.id), app)
})

router.resolve()