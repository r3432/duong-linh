// document.getElementById("product-detail").onclick=function(){
//   window.location.href="product-detail.html";
// }
// click thay đổi ảnh
function changeImage(src) {
  document.getElementById('mainImage').src = src;
}


// api


  // Thay đổi endpoint để khớp với API đúng

// B1: GET id Movie 
let params = new URLSearchParams(document.location.search);
let idDetail = params.get("id");
console.log(idDetail)
// console.log("idDetail:", idDetail);  // Kiểm tra xem idDetail có đúng không

const getApi = async (url) => {
  try {
    let response = await axios.get(url);
    console.log("API response:", response.data);  // Log dữ liệu trả về từ API
    showDetail(response.data);  // Thêm gọi hàm showDetail để hiển thị dữ liệu
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}

getApi(apiUrl);

const showDetail = (data) => {
  console.log("showDetail data:", data);  // Kiểm tra dữ liệu đầu vào của hàm showDetail
  
  // Truy cập phần tử
  let imgDetail = document.querySelector(".product-detail .roww-js");

  let detail = data.filter(item => {
    return item.id == idDetail;
  });

  console.log("Filtered detail:", detail);  // Kiểm tra kết quả lọc

  if (detail.length > 0) {
    imgDetail.innerHTML = `<div class="detail-img-wrap col-md-6">
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
             ${ '<i class="fas fa-star product-panel-rate"></i>'.repeat(detail[0].rating)}
              
            </div>
            <h2 class="detail-taitle">${detail[0].code}</h2>
            <div class="detail-taitle">
            <h3>Thông tin sản phẩm :</h3>
                <p> ${detail[0].inform.replace(/\n/g, '<br>')}</p>
             
            </div>
            <div class="detail-price">
            ${detail[0].price}
            </div>
            <div class="detail-button">
              <button type="submit" name="themgiohang" class="add-to-cart-button" onclick="return validateSizeSelection();">
                <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                <span>Thêm vào giỏ hàng</span>
              </button>
              <button type="submit" name="muangay" class="buy-now-button" onclick="return validateSizeSelection();">
                <i class="fas fa-shopping-bag" aria-hidden="true"></i>
                <span>Mua Ngay</span>
              </button>
            </div>
          </div>
        </div>`;
  } else {
    imgDetail.innerHTML = "<p>Product not found</p>";
  }
}



