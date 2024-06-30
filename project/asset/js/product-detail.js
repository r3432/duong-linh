// Hàm thay đổi ảnh chính
function changeImage(src) {
  document.getElementById('mainImage').src = src;
}

// API và xử lý dữ liệu chi tiết sản phẩm
let params = new URLSearchParams(document.location.search);
let idDetail = params.get("id");
console.log(idDetail);

const getApi = async (url) => {
  try {
    let response = await axios.get(url);
    console.log("API response:", response.data);
    showDetail(response.data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
};

getApi(apiUrl);

const showDetail = (data) => {
  console.log("showDetail data:", data);

  let imgDetail = document.querySelector(".product-detail .roww-js");

  let detail = data.filter(item => {
    return item.id == idDetail;
  });

  console.log("Filtered detail:", detail);

  if (detail.length > 0) {
    imgDetail.innerHTML = `
      <div class="detail-img-wrap col-md-6">
        <div class="detail-img">
          <img id="mainImage" src="${detail[0].image}" alt="Product Image">
        </div>
        <div class="thumbnail-img-wrap">
          <img class="thumbnail-img" src="images1/m2.jpg" alt="Thumbnail 1" onclick="changeImage(this.src)">
          <img class="thumbnail-img" src="images/product_10.png" alt="Thumbnail 2" onclick="changeImage(this.src)">
          <img class="thumbnail-img" src="images/product_12.png" alt="Thumbnail 3" onclick="changeImage(this.src)">
        </div>
      </div>
      <div class="detail-name col-md-6">
        <div class="detail-img">
          <h1 class="detail-taitle">${detail[0].title}</h1>
          <div class="detail-rate">
            ${'<i class="fas fa-star product-panel-rate"></i>'.repeat(detail[0].rating)}
          </div>
          <h2 class="detail-taitle">${detail[0].code}</h2>
          <div class="detail-taitle">
            <h3>Thông tin sản phẩm :</h3>
            <p>${detail[0].inform.replace(/\n/g, '<br>')}</p>
          </div>
          <div class="detail-price">
            ${detail[0].price}
          </div>
          <div class="detail-quantity">
            <h3>Số lượng:</h3>
            <button class="quantity-button" id="decrease-quantity">-</button>
            <span id="quantity">1</span>
            <button class="quantity-button" id="increase-quantity">+</button>
          </div>
          <div class="detail-button">
            <button type="submit" name="themgiohang" class="add-to-cart-button">
              <i class="fas fa-shopping-cart" aria-hidden="true"></i>
              <span>Thêm vào giỏ hàng</span>
            </button>
            <button type="submit" name="muangay" class="buy-now-button">
              <i class="fas fa-shopping-bag" aria-hidden="true"></i>
              <span>Mua Ngay</span>
            </button>
          </div>
        </div>
      </div>
    `;

    validateSizeSelection();
  } else {
    imgDetail.innerHTML = "<p>Product not found</p>";
  }
};

// Xử lý thêm sản phẩm vào giỏ hàng
document.addEventListener("DOMContentLoaded", function() {
  const adCart = document.querySelector(".add-cart");
  const headCart = document.querySelector(".header-cart");
  let quantity = 1;

  // Khởi tạo sự kiện click cho nút tăng/giảm số lượng
  document.body.addEventListener("click", (event) => {
    if (event.target.id === "decrease-quantity" && quantity > 1) {
      quantity--;
      document.getElementById("quantity").innerText = quantity;
    }

    if (event.target.id === "increase-quantity") {
      quantity++;
      document.getElementById("quantity").innerText = quantity;
    }

    if (event.target.closest(".add-to-cart-button")) {
      event.stopPropagation();
      const productElement = event.target.closest(".detail-name");
      const product = {
        id: idDetail,
        image: document.getElementById('mainImage').src,
        title: productElement.querySelector(".detail-taitle").innerText,
        price: productElement.querySelector(".detail-price").innerText,
        quantity: quantity
      };
      addToCart(product);
      updateCartDisplay();
      updateCartCount();
      adCart.style.display = "block";
      console.log("Thêm vào giỏ hàng");
    }
  });

  headCart.addEventListener("click", (event) => {
    event.preventDefault();
    adCart.style.display = "block";
  });

  document.addEventListener("click", (event) => {
    if (!headCart.contains(event.target) && !adCart.contains(event.target)) {
      adCart.style.display = "none";
    }
  });

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }


    localStorage.setItem("cart", JSON.stringify(cart));
   
  };

  const updateCartDisplay = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDisplay = document.querySelector(".add-cart");
    cartDisplay.innerHTML = cart.map(product => `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.title}" />
        <div>
          <h4>${product.title}</h4>
          <p>${product.price}</p>
          <p>Số lượng: ${product.quantity}</p>
        </div>
      </div>
    `).join("");
  };

  const updateCartCount = (cart) => {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.innerText = totalCount;
  };

  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount(initialCart);
  updateCartDisplay();
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


//wow js hieu ung animate
jQuery(function () {
  new WOW().init();
});
jQuery("[data-toggle='tooltip']").tooltip(); 