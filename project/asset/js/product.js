

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
            <a href="${product.buttonId}" class="btn btn-view">${product.buttonText}</a>
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
