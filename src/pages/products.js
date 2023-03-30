import data from "../../db.json" assert { type: "json" };
import Header from "../js/header";
import Breadcrumbsdetails from "../js/breadcrumbs-details";
import Footer from "../js/footer";
import "../style/product-detail.css"
import { useEffect , useState } from "../../lib";
import { getOneProduct } from "../api/product";


// const urlParam = new URLSearchParams()
// console.log(urlParam.get('id'));

var ProductPage = function(id) {
    const [book, setData] = useState({})

    useEffect(function() {
        getOneProduct(id)
        .then(({data}) =>
            setData(data)
        )
    }, []) // Tham số xác định trạng thái render lại components
    
    useEffect(function() {
        fetch(`http://localhost:3000/books?categories.id=${id_cate}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data);
            setRelatedBook(data)
        })
    }, [])
    // const book = data.find(function(item) {
    //     return item.id == id
    // })
    const current_seller = Math.round(book.current_seller?.price);
    const original_price = Math.round(book.original_price);
    function discount(original_price, current_seller) {
        return Math.round(
          ((original_price - current_seller) / original_price) * 100
        );
      }
    return /*html*/`
    <div class = "container">
        ${Header()}
        ${Breadcrumbsdetails()}

        <main> 
            <div class="home-product-detail" style="padding-top: 20px">
                <div class="header-product-detail">
                    <div class="img-detail">
                        <img class="" src="${book.images?.[0].base_url}"/>
                    </div>
                    <div class="text-detail">
                        <div class ="nsx"> 
                            <p>tác giả: <span>${book.authors}</span></p>
                            </div>
                        <h3>${book.name}</h3>
                        <div class ="evaluate"> 
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                            <box-icon name='star' type='solid' color='#121212' ></box-icon>
                        <p>(Xem ${book.rating_average} đánh giá) 
                        </div>
                        <div class ="price"> <h4> ${book.current_seller?.price}  ₫ <p>${book.original_price}</p>
                        </div>
                        <hr class ="hr-review-content" >

                        <div class = "amount"> 
                            <p>Số lượng</p>
                            <form> 
                                <button> - </button>
                                <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="1">
                                <button> + </button>
                            </form>
                        </div>

                        <div class ="btn-send"> 
                            <button>chọn mua</button>
                        </div>
                    </div>
                </div>
                <div class="similar-product">
                    <h3>Sản phẩm tương tự</h3>
                </div>
                <div class="similar-product-in">
                <article> 
                    <div class ="picture-product"> 
                        <img src="../src/img/Rectangle35.png"> 
                    </div>       

                    <div class ="content-product"> 
                        <h3>TƯ DUY NGƯỢC - Nguyễn Anh Dũng</h3>
                        <div>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                            | Đã bán 54
                        </div>
                            <p>67.000 &#8363; <span class ="span">-32%</span></p>
                        <img style="width: 150px;" src="../src/img/Rectangle9.png"> 

                    </div>
                </article> 

                <article> 
                    <div class ="picture-product"> 
                        <img src="../src/img/Rectangle36.png"> 
                    </div>       

                    <div class ="content-product"> 
                         


                        <h3>Đời Ngắn Đừng Ngủ Dài (Tái Bản)</h3>

                        <div>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                            | Đã bán 1000+
                        </div>
                            <p>50.000 &#8363; <span class ="span">-33%</span></p>
                    </div>
                </article> 

                <article> 
                    <div class ="picture-product"> 
                        <img src="../src/img/Rectangle37.png"> 
                    </div>       

                    <div class ="content-product"> 
                         


                        <h3>Thiên Nga Đen (Tái Bản 2020)</h3>

                        <div>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                            | Đã bán 1000+
                        </div>
                            <p style="color: black";>194.300 &#8363;</p>

                            <img style="width: 150px;" src="../src/img/Rectangle9.png"> 
                    </div>
                </article> 

                <article> 
                    <div class ="picture-product"> 
                        <img src="../src/img/Rectangle38.png"> 
                    </div>       

                    <div class ="content-product"> 
                         


                        <h3>Sách: 1 Ngày Bằng 48 Giờ - Sổ tay Quản Lí Thời Gian Hiệu Quả</h3>

                        <div>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                            | Đã bán 1000+
                        </div>
                            <p>44.000 &#8363; <span class ="span">-28%</span></p>
                    </div>
                </article> 

                <article> 
                    <div class ="picture-product"> 
                        <img src="../src/img/Rectangle39.png"> 
                    </div>       

                    <div class ="content-product"> 
                         


                        <h3>Hãy Khiến Tương Lai Biết Ơn Vì Hiện Tại Bạn Đã Cố Gắng Hết Mình (Tặng Kèm: 01 Bookmark)</h3>

                        <div>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                            | Đã bán 1000+
                        </div>
                            <p>57.491 &#8363; <span class ="span">-28%</span></p>
                    </div>
                </article> 

                <article> 
                    <div class ="picture-product"> 
                        <img src="../src/img/Rectangle40.png"> 
                    </div>       

                    <div class ="content-product"> 
                         


                        <h3>Đừng Cố Làm Người Tốt Trong Mắt Tất Cả Mọi Người</h3>

                        <div>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                        <box-icon type='solid' name='star'></box-icon>
                            | Đã bán 1000+
                        </div>
                            <p>89.000 &#8363; <span class ="span">-28%</span></p>
                    </div>
                </article> 
            </div>

                <div class="info">
                    <h3>Thông tin chi tiết</h3>

                    <div class ="info-details">
                        <div class ="title">
                            <ul>
                                <li>${book.specifications?.[0].attributes[0]?.name}</li>
                                <li>${book.specifications?.[0].attributes[1]?.name}</li>
                                <li>${book.specifications?.[0].attributes[2]?.name}</li>
                                <li>${book.specifications?.[0].attributes[3]?.name}</li>
                                <li>${book.specifications?.[0].attributes[4]?.name}</li>
                                <li>${book.specifications?.[0].attributes[5]?.name}</li>
                                <li>${book.specifications?.[0].attributes[6]?.name}</li>
                            </ul>
                        </div>

                        <div class ="inf-content">
                            <ul>
                                <li>${book.specifications?.[0].attributes[0]?.value}</li>
                                <li>${book.specifications?.[0].attributes[1]?.value}</li>
                                <li>${book.specifications?.[0].attributes[2]?.value}</li>
                                <li>${book.specifications?.[0].attributes[3]?.value}</li>
                                <li>${book.specifications?.[0].attributes[4]?.value}</li>
                                <li>${book.specifications?.[0].attributes[5]?.value}</li>
                                <li>${book.specifications?.[0].attributes[6]?.value}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class ="describle"> 
                    <h3>Mô tả sản phẩm</h3>
                    <div> 
                    ${book.description}
                        <p></p>
                    </div>
                </div>
            <div class ="btn-see-more">
                <button>Xem Thêm Nội Dung</button>
            </div>
            </div>

            
        </main>

        
            ${Footer()}
        
    </div>
    `
}

export default ProductPage;

