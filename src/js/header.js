
const Header = function() {
    return /*html*/ `
        <header> 
            <div class ="logo-wz">
                <img src="../../src/img/Group_1.png">
            </div>

            <div class ="ct-search-account"> 
                <form>
                    <input type="text"> 
                    <button>
                    <box-icon name='user' color='#f7f7f7' ></box-icon>
                    Tìm Kiếm
                    </button>
                </form>
                
                <div class ="account">
                    <div class="icon-user">
                    <box-icon name='user' color='#f7f7f7' ></box-icon>
                    </div>
                    
                    <div class ="ct-login-signup">   
                    <p class ="login-signup"><a href="../../account/login.html">Đăng Nhập</a> / <a href="">Đăng Ký</a></p>
                    <a class="text-white underline" href="/admin" style="text-decoration: none;">Admin</a>
                    </div>
                </div>

            </div>

                <div class ="cart"> 
                <box-icon name='cart' type='solid' color='#f7f7f7' ></box-icon>

                    <p> Giỏ Hàng</p>
                </div>
        </header>
    `;
};

export default Header;