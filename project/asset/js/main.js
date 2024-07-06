setTimeout(function() {
  location.reload();
}, 60 * 1000);

$(document).ready(function() {
  var owl = $('.xxx');
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Custom Navigation Events
  $('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
  });

  // Slide demo
  var owlC = $('.ccc');
  owlC.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  // Custom Navigation Events
  $('.owl-prev').click(function() {
    owlC.trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function() {
    owlC.trigger('next.owl.carousel');
  });
});

//scorll
var mybutton = document.getElementById("myBtn-scroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// document.addEventListener("DOMContentLoaded", function() {
//   var menuToggle = document.getElementById("menuToggle");
//   var productList = document.getElementById("productList");

//   menuToggle.addEventListener("click", function() {
//     if (productList.style.display === "none") {
//       productList.style.display = "block";
//     } else {
//       productList.style.display = "none";
//     }
//   });
// });

// 
function xemhang(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

function cart(){
  window.location.href="cart.html"
}


// lay api 
// Lấy API từ URL
const apiUrl = 'https://nsm5kp-3000.csb.app/product';
// const apiUrl1 = 'https://nsm5kp-3000.csb.app/product1';

// Hàm lấy dữ liệu từ API và hiển thị sản phẩm
const getAPI = async (URLapi) => {
  let response = await axios.get(URLapi);
  // console.log(response.data.results); 
  ShowMovie(response.data);
  ShowProduct(response.data)
}

getAPI(apiUrl); 
// getAPI(apiUrl1); 


let rowJS=document.querySelector(".row-js")

let rowJSproduct=document.querySelector(".product .product-box")
// console.log(rowJSproduct)

const ShowProduct=(data)=>{
  let HTML=``;
  // console.log(data);
  data.forEach(product => {
    // Tạo HTML cho mỗi sản phẩm từ dữ liệu API
    HTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 product-panel-item-wrap">
            <div class="product-item">
              <div class="product-panel-img-wrap">
                <img src="${product.image}" alt="" class="product__panel-img">
              </div>
              <h3 class="product-panel-heading">
                <a class="product-panel-link" href="#">${product.title}</a>
              </h3>
              <div class="product-panel-rate-wrap">
                ${'<i class="fas fa-star product-panel-rate"></i>'.repeat(product.rating)}
              </div>
            <div class="product-panel-price">
            <span class="product-panel-price-old">${product["price-old"]}</span>
            <span class="product-panel-price-current">${product["price-current"]}</span>
          </div>
          <div class="product-panel-price-sale-off">${product["sale-off"]}</div>
              <div class="product-buttons">
                <button href="" onclick="xemhang(this.getAttribute('data-product-id'))" class="btn btn-view" data-product-id="${product.id}" >${product.buttonText}</button>
                <a href="#" class="btn btn-buy">Mua ngay</a>
              </div>
            </div>
          </div>`;
});

// Thêm sản phẩm vào phần tử có class row-js
rowJSproduct.innerHTML = HTML;
};
 
const ShowMovie=(data)=>{
  let HTML=``;
  // console.log(data);
  data.forEach(product => {
    // Tạo HTML cho mỗi sản phẩm từ dữ liệu API
    HTML += `
        <div class="bestselling-product col-lg-4 col-md-6 col-sm-12">
            <div class="bestselling-product-img-box">
              <img src="${product.image}" alt="Biểu tượng thất truyền" class="bestselling-product-img">
            </div>
            <div class="bestselling-product-text">
              <h3 class="bestselling-product-tiltle">
                <a href="product-detail.html?id=${product.id} " class="bestselling-product-link">${product.title}</a>
              </h3>

              <div class="bestselling-product-rate-wrap">
                ${'<i class="fas fa-star bestselling-product-rate"></i>'.repeat(product.rating)}
              </div>
  
              <span class="bestselling-product-price"> ${product.price}</span>
  
              <div class="bestselling-product-button-wrap">
                <button class="bestselling-product-button" onclick="xemhang(this.getAttribute('data-product-id'))" data-product-id="${product.id}">Xem hàng</button>

              </div>
            </div>
           
        </div>`;
});

// Thêm sản phẩm vào phần tử có class row-js
rowJS.innerHTML = HTML;
};

// Chuc nang tim kiem
const form = document.querySelector('.header-search');
const inputSearch = document.querySelector('.header_search-input');
const btnSearch = document.querySelector('.header_search-btn');

// Xử lý khi submit form
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt khi submit
  searchProduct();
});

// Xử lý khi nhấn nút "Tìm kiếm"
btnSearch.addEventListener('click', async () => {
  searchProduct();
});

// Hàm tìm kiếm sản phẩm
// Hàm tìm kiếm sản phẩm
const searchProduct = async () => {
  const searchTerm = inputSearch.value.trim();

  if (searchTerm !== '') {
    try {
      // Gửi yêu cầu tìm kiếm sản phẩm
      const response = await axios.get(`${apiUrl}?title=${searchTerm}`);
      const searchData = response.data;

      // Xóa kết quả tìm kiếm trước đó (nếu có)
      rowJS.innerHTML = '';

      // Hiển thị kết quả tìm kiếm trên trang web
      if (searchData.length > 0) {
        ShowMovie(searchData);
      } else {
        rowJS.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp</p>';
      }
    } catch (error) {
      console.error("Error searching for product:", error);
    }
  } else {
    alert("Vui lòng nhập từ khóa tìm kiếm!");
  }
};

// reponsive
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const headerNav = document.querySelector('.header_nav');

  mobileMenuToggle.addEventListener('click', function () {
    headerNav.classList.toggle('active');
  });
});


// slide product-love





// active menu


document.addEventListener("DOMContentLoaded", () => {
  const setActiveMenu = (selector) => {
    const menuItems = document.querySelectorAll(selector);

    const removeActive = () => {
      menuItems.forEach((item) => {
        item.querySelector('a').classList.remove("active");
      });
    };

    let activeIndex = localStorage.getItem("ACTIVE_MENU");

    if (activeIndex !== null) {
      removeActive();
      menuItems[activeIndex].querySelector('a').classList.add("active");
    } else {
      menuItems[0].querySelector('a').classList.add("active");
    }

    menuItems.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();

        removeActive();
        item.querySelector('a').classList.add("active");

        localStorage.setItem("ACTIVE_MENU", index);
        const href = item.querySelector("a").getAttribute("href");
        setTimeout(() => {
          window.location.href = href;
        }, 100);
      });
    });
  };

  setActiveMenu(".header-nav-item");
});


// dieu huong duoi thanh menu main
document.addEventListener('DOMContentLoaded', function() {
  const breadcrumb = document.getElementById('breadcrumb');
  const currentPath = location.pathname.split('/').pop();

  let breadcrumbText = 'Trang chủ';
  switch(currentPath) {
      case 'product.html':
          breadcrumbText += ' / Sản phẩm';
          break;
      case 'introduce.html':
          breadcrumbText += ' / Giới thiệu';
          break;
      case 'page-new.html':
          breadcrumbText += ' / Bài viết';
          break;
      case 'contact.html':
          breadcrumbText += ' / Liên hệ';
          break;
      case 'index.html':
      default:
          breadcrumbText += '';
          break;
  }

  breadcrumb.textContent = breadcrumbText;
});


//wow js hieu ung animate
jQuery(function () {
  new WOW().init();
});
jQuery("[data-toggle='tooltip']").tooltip(); 