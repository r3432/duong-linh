function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Lấy ID bài viết từ URL
const postId = getQueryParam('id');

// Dữ liệu JSON mẫu
const posts = [
  {
      id: 1,
      title: "Mẹo săn mã voucher giảm giá tại Okachi",
      date: "28/05/2020",
      category: "Tin tức",
      author: "duong linh",
      content: "Chạy dốc là một trong những bài tập hiệu quả giúp tăng cường sự dẻo dai, linh hoạt cho các cơ, bắp chân. Tuy nhiên với nhiều người có không gian sống eo hẹp, không thể luyện tập ở ngoài thì giải pháp thay thế hoàn hảo nhất chính là máy chạy bộ tại nhà tích hợp tính năng nâng dốc.Tuy nhiên không phải ai cũng biết đến cách điều chỉnh độ dốc trên máy chạy bộ. Do đó hãy cùng Okachi khám phá chi tiết lợi ích đối với sức khỏe cũng như cách thay đổi độ dốc máy chạy bộ chi tiết qua bài viết dưới đây",
      image: "images1/thanh2.jpg"
  },
  {
    id: 2,
    title: "Mẹo săn mã voucher giảm giá tại Okachi",
    date: "28/05/2021",
    category: "Tin tức",
    author: "duong linh",
    content: "Chạy dốc là một trong những bài tập hiệu quả giúp tăng cường sự dẻo dai, linh hoạt cho các cơ, bắp chân. Tuy nhiên với nhiều người có không gian sống eo hẹp, không thể luyện tập ở ngoài thì giải pháp thay thế hoàn hảo nhất chính là máy chạy bộ tại nhà tích hợp tính năng nâng dốc.Tuy nhiên không phải ai cũng biết đến cách điều chỉnh độ dốc trên máy chạy bộ. Do đó hãy cùng Okachi khám phá chi tiết lợi ích đối với sức khỏe cũng như cách thay đổi độ dốc máy chạy bộ chi tiết qua bài viết dưới đây",
    image: "images1/background1.jpg"
},
{
  id: 3,
  title: "Mẹo săn mã voucher giảm giá tại Okachi",
  date: "28/05/2022",
  category: "Tin tức",
  author: "duong linh",
  content: "Chạy dốc là một trong những bài tập hiệu quả giúp tăng cường sự dẻo dai, linh hoạt cho các cơ, bắp chân. Tuy nhiên với nhiều người có không gian sống eo hẹp, không thể luyện tập ở ngoài thì giải pháp thay thế hoàn hảo nhất chính là máy chạy bộ tại nhà tích hợp tính năng nâng dốc.Tuy nhiên không phải ai cũng biết đến cách điều chỉnh độ dốc trên máy chạy bộ. Do đó hãy cùng Okachi khám phá chi tiết lợi ích đối với sức khỏe cũng như cách thay đổi độ dốc máy chạy bộ chi tiết qua bài viết dưới đây",
  image: "images1/comrang.png"
}
  // Thêm các bài viết khác vào đây
];

// Tìm bài viết theo ID
const post = posts.find(p => p.id == postId);

// Hiển thị nội dung bài viết
if (post) {
  document.getElementById('post-list').innerHTML = `
      <h1>${post.title}</h1>
      <div class="post-meta">
          <i class="fa fa-calendar-alt"></i> ${post.date}
          <i class="fa fa-folder" style="margin-left: 15px;"></i> ${post.category}
          <i class="fa fa-user" style="margin-left: 15px;"></i> ${post.author}
      </div>
      <div class="post-image">
          <img src="${post.image}" alt="${post.title}" style="width: 100%; height: auto;">
      </div>
      <div class="post-content">
          ${post.content}
      </div>
  `;
} else {
  document.getElementById('post-detail').innerHTML = `<p>Bài viết không tồn tại.</p>`;
}