setTimeout(function() {
  location.reload();
}, 60 * 1000);

$(document).ready(function() {
  var owl = $('.owl-carousel');
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
});


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

document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById("menuToggle");
  var productList = document.getElementById("productList");

  menuToggle.addEventListener("click", function() {
    if (productList.style.display === "none") {
      productList.style.display = "block";
    } else {
      productList.style.display = "none";
    }
  });
});

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

// Hàm lấy dữ liệu từ API và hiển thị sản phẩm
const getAPI = async (URLapi) => {
  let response = await axios.get(URLapi);
  // console.log(response.data.results); 
  ShowMovie(response.data)
}

getAPI(apiUrl); 
let rowJS=document.querySelector(".row-js")
// console.log(rowJS)
 
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
const btnSearch=document.querySelector('.header_search-btn');
// console.log(form);
// console.log(inputSearch);

const searchProduct = async (title) => {
  try {
    let response = await axios.get(`${apiUrl}/search?title=${title}`);
    ShowMovie(response.data.product);
  } catch (error) {
    console.error("Error searching for product:", error);
  }
};

form.addEventListener('submit', (event)=>{
  event.preventDefault(); //Bo loading mac dinh trinh duyet


  // B1: Lay gia tri cua ong nguoi dung search
  const searchTerm = inputSearch.value;
  console.log(searchTerm);

  if(searchTerm && searchTerm !== '') {

    getApi(apiUrl + searchTerm);
    
  }else {
    alert("Vui long nhap ten cua ban!");
  }
})