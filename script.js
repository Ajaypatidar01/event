
  window.addEventListener('DOMContentLoaded', (event) => {
    TopnavMenuButtonHandler();
  });

  
  const TopnavMenuButtonHandler = () => {
    const topnavMenuButtonEle = document.getElementById('topnav-menu-button');
    const sidenavPopupRootEle = document.getElementById('sidenav-popup-root');
    const siteRootEle = document.getElementById('site-root');
    const sidenavPopupCloseButtonEle = document.querySelector('.sidenav-popup-close');
  
    const windowClicker = (event) => {
      if (event.target == sidenavPopupRootEle) {
        closeSideNav();
      }
    }
  
    const closeSideNav = () => {
      sidenavPopupRootEle.classList.remove('sidenav-popup-root--active');
      siteRootEle.classList.remove('site-root-sidenav-popup-root--active')
      window.removeEventListener('click', windowClicker);
    }
  
    topnavMenuButtonEle.onclick = function () {
      sidenavPopupRootEle.classList.add('sidenav-popup-root--active');
      siteRootEle.classList.add('site-root-sidenav-popup-root--active');
      window.addEventListener('click', windowClicker);
  
    }
  
    sidenavPopupCloseButtonEle.onclick = function () {
      closeSideNav();
    }
  }
  