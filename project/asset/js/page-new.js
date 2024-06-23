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
      date: "28/05/2020",
      category: "Tin tức",
      author: "duong linh",
      content: "Chạy dốc là một trong những bài tập hiệu quả giúp tăng cường sự dẻo dai, linh hoạt cho các cơ, bắp chân. Tuy nhiên với nhiều người có không gian sống eo hẹp, không thể luyện tập ở ngoài thì giải pháp thay thế hoàn hảo nhất chính là máy chạy bộ tại nhà tích hợp tính năng nâng dốc.Tuy nhiên không phải ai cũng biết đến cách điều chỉnh độ dốc trên máy chạy bộ. Do đó hãy cùng Okachi khám phá chi tiết lợi ích đối với sức khỏe cũng như cách thay đổi độ dốc máy chạy bộ chi tiết qua bài viết dưới đây",
      image: "images1/background1.jpg"
  },
  {
      id: 3,
      title: "Mẹo săn mã voucher giảm giá tại Okachi",
      date: "28/05/2020",
      category: "Tin tức",
      author: "duong linh",
      content: "Chạy dốc là một trong những bài tập hiệu quả giúp tăng cường sự dẻo dai, linh hoạt cho các cơ, bắp chân. Tuy nhiên với nhiều người có không gian sống eo hẹp, không thể luyện tập ở ngoài thì giải pháp thay thế hoàn hảo nhất chính là máy chạy bộ tại nhà tích hợp tính năng nâng dốc.Tuy nhiên không phải ai cũng biết đến cách điều chỉnh độ dốc trên máy chạy bộ. Do đó hãy cùng Okachi khám phá chi tiết lợi ích đối với sức khỏe cũng như cách thay đổi độ dốc máy chạy bộ chi tiết qua bài viết dưới đây",
      image: "images1/comrang.png"
  }
 
];

const postsPerPage = 2;
let currentPage = 1;

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function setPage(page) {
  const url = new URL(window.location);
  url.searchParams.set('page', page);
  window.history.pushState({}, '', url);
  currentPage = page;
  renderPosts(page);
  renderPagination();
}

function renderPosts(page) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';
  const start = (page - 1) * postsPerPage;
  const end = page * postsPerPage;
  const paginatedPosts = posts.slice(start, end);

  paginatedPosts.forEach(post => {
      let postItem = document.createElement('div');
      postItem.classList.add('post-item', 'col-md-6', 'col-sm-12');
      postItem.innerHTML = `

          <a href="new-detail.html?id=${post.id}" class="post-item-title"><img src="${post.image}" alt="${post.title}"></a>
          
          <div class="post-item-body">
              <a href="new-detail.html?id=${post.id}" class="post-item-title">${post.title}</a>
              <div class="post-item-meta">
                  <i class="fa fa-calendar-alt"></i> ${post.date}
                  <i class="fa fa-folder" style="margin-left: 15px;"></i> ${post.category}
                  <i class="fa fa-user" style="margin-left: 15px;"></i> ${post.author}
              </div>
              <div class="post-item-descrip">
                  ${post.content}
                                 </div>
                    </div>
                `;
                postList.appendChild(postItem);
            });

            if (paginatedPosts.length === 0) {
                postList.innerHTML = `<p>Không có bài viết nào để hiển thị.</p>`;
            }
        }

        function renderPagination() {
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            const totalPages = Math.ceil(posts.length / postsPerPage);

            if (totalPages > 1) {
                for (let i = 1; i <= totalPages; i++) {
                    let pageLink = document.createElement('a');
                    pageLink.href = '#';
                    pageLink.textContent = i;

                    if (i === currentPage) {
                        pageLink.classList.add('active');
                    }

                    pageLink.addEventListener('click', function(event) {
                        event.preventDefault();
                        setPage(i);
                    });

                    pagination.appendChild(pageLink);
                }
            }
        }

        function initialize() {
            const pageQueryParam = getQueryParam('page');
            if (pageQueryParam) {
                currentPage = parseInt(pageQueryParam);
            }
            renderPosts(currentPage);
            renderPagination();
        }

        window.addEventListener('load', initialize);