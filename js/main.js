$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $('.m-menu');
  const menuBtn = $('.ico-btn__burger');
  let isMenuOpen = false;
  mMenuBtn.on("click", function () {
    mMenu.toggleClass('active');
    $('body').toggleClass('no-scroll');
    isMenuOpen = !isMenuOpen;
    menuBtn.toggleClass('is-active');
  });
});
