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