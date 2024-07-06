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
//scorrll
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

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    

//wow js hieu ung animate
jQuery(function () {
    new WOW().init();
  });
  jQuery("[data-toggle='tooltip']").tooltip(); 