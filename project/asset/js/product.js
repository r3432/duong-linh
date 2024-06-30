


// 
function xemhang(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

function cart(){
  window.location.href="cart.html"
}


const apiUrl = 'https://nsm5kp-3000.csb.app/product';
// const apiUrl1 = 'https://nsm5kp-3000.csb.app/product1';


const getAPI = async (URLapi) => {
  let response = await axios.get(URLapi);
  // console.log(response.data.results); 

  ShowProduct(response.data)
}

getAPI(apiUrl); 
// getAPI(apiUrl1); 
let rowJSproduct=document.querySelector(".product .product-box")
console.log(rowJSproduct)
const ShowProduct = (data) => {
  let HTML = ``;
  // console.log(data);
  data.forEach(product => {
   
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


  rowJSproduct.innerHTML = HTML;
};


// slider

var owlC = $('.ccc');
owlC.owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
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