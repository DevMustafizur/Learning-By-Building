import { DATABASE } from "../assets/data.js";


function pageVerify() {
    const path = window.location.pathname;
    const fileName = path.split("/").pop();
    if (fileName == "home.html") {
        HOMEPAGE()
    } else if (fileName == "shop.html") {
        SHOPPAGE()
    } else if (fileName == "singleProduct.html") {
        SINGLEPRODUCTPAGE()
    }
}
pageVerify()

function LAYOUT() {
    const menuOpenBtn = document.querySelector(".menu_open_btn")
    const menuCloseBtn = document.querySelector(".menu_close_btn")
    const menuList = document.querySelector(".menu_list")

    // listner
    menuOpenBtn.addEventListener("click", menuOpen)
    menuCloseBtn.addEventListener("click", menuClose)
    window.addEventListener("resize", removeClassinLargeDevice)

    function menuOpen() {
        menuList.classList.add("show")
    }
    function menuClose() {
        menuList.classList.remove("show")
    }
    function removeClassinLargeDevice() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            menuList.classList.remove("show");
        }
    }
}
LAYOUT()

function HOMEPAGE() {

}

function SHOPPAGE() {
    const filters_sidebar = document.querySelector(".filters_sidebar")
    const filter_openBtn = document.querySelector(".filters_open_btn")
    const filter_close_btn = document.querySelector(".filters_close_btn");
    const products_grid = document.querySelector(".products_grid")

    // listner
    filter_openBtn.addEventListener("click", filtersSidebarOpen)
    filter_close_btn.addEventListener("click", filterSidebarClose)

    function filtersSidebarOpen() {
        filters_sidebar.classList.add("show")
        filter_openBtn.classList.add("hide")
    }
    function filterSidebarClose() {
        filters_sidebar.classList.remove("show")
        filter_openBtn.classList.remove("hide")
    }


    function productsDisplayed() {
        window.sentDataSingleProductPage = sentDataSingleProductPage;

        products_grid.innerHTML = DATABASE.shop.products.map((product) => {
            return `
                                    <div class="product_card">
                                <div class="product_image">
                                <img 
                                    onclick='sentDataSingleProductPage(${JSON.stringify(product)})' src="${product.image}" />
                                </div>
                                <div class="product_details">
                                    <p class="product_title">${product.title}</p>
                                    <div class="product_ratings">
                                        
                                    </div>
                                    <div class="product_price">
                                        <p class="product_offer_price">$<span class="product_offer_price_length">${product.discountPrice}</span></p>
                                        <p class="product_old_price">
                                            $<del class="product_old_price_length">${product.price}</del>
                                        </p>
                                    </div>
                                </div>
                            </div>
        `
        }).join("")

        function sentDataSingleProductPage(product) {
            const productStringify = JSON.stringify(product);
            const urlEncoded = encodeURIComponent(productStringify)
            const productData = encodeURIComponent(urlEncoded);
            window.location.href = `singleProduct.html?data=${productData}`;

            SINGLEPRODUCTPAGE()
        }

    }
    productsDisplayed()
}

function SINGLEPRODUCTPAGE() {
    const singleProduct = document.querySelector(".product");
    const dynamicProductTitle = document.querySelector(".banner_pathName .dynamic_page")
    const homePageEvent = document.querySelector(".banner_pathName .homePage")
    const shopPageEvent = document.querySelector(".banner_pathName .shopPage")

    function getProductFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const data = params.get("data");
        const product = data ? JSON.parse(decodeURIComponent(data)) : null;
        return product;
    }

    function displayedProduct() {
        const product = getProductFromUrl();
        console.log(product)
        singleProduct.innerHTML = `
                <div class="product">
                    <img src=${product.image} alt="">
                    <div class="product_details">
                        <h5 class="product_title">${product.title}</h5>
                        <div class="product_ratings">
                            <div class="rating_icons"></div>
                            <span class="rating_point">
                            ${product.rating}</span>
                        </div>
                        <div class="product_description">
                         ${product.description}
                        </div>
                        <div class="product_price">
                            <p class="offer_price">$${product.discountPrice}</p>
                            <p class="old_price"><del>$${product.price}</del></p>
                        </div>
                        <hr>
                        <div class="product_hot_details">
                            <div class="item">
                                <p class="property_name">Category</p>
                                <span class="property_value">${product.category}</span>
                            </div>
                            <div class="item">
                                <p class="property_name">Condition</p>
                                <span class="property_value">${product.condition}</span>
                            </div>
                            <div class="item">
                                <p class="property_name">Stock</p>
                                <span class="property_value">${product.stock}</span>
                            </div>
                        </div>
                        <div class="btn_group">
                            <button class="add_to_cart_btn">Add to Cart</button>
                            <button class="buy_now_btn">Buy Now</button>
                        </div>
                    </div>
                </div>
    `
    }
    displayedProduct()


    function showDynamicProductNameInBanner() {
        const product = getProductFromUrl();
        dynamicProductTitle.innerText = product.title
    }
    showDynamicProductNameInBanner()

    function dynamicPageRedirect(event, page) {
        event.addEventListener("click", () => {
            if (page == "home") {
                console.log('done')
                window.location.pathname = "shopEasy/pages/home.html"
            } else if (page == "shop") {
                window.location.pathname = 'shopEasy/pages/shop.html'
            }
        })
    }
    dynamicPageRedirect(homePageEvent, "home")
    dynamicPageRedirect(shopPageEvent, "shop")
}


