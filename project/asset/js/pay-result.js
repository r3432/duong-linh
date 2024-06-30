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