//UI Cache
let fnportfolioUI = (function() {
  const _domClass = {
    asidebtn: ".aside-nav-btn",
    asidemenu: ".aside-menu",
    asideimage: ".aside-menu-image",
    asidenav: ".aside-menu-nav",
    asidelist: ".aside-menu-list",
    asideitem: ".aside-menu-item"
  };

  return {
    asidebtn: document.querySelector(_domClass.asidebtn),
    asidemenu: document.querySelector(_domClass.asidemenu),
    asideimage: document.querySelector(_domClass.asideimage),
    asidenav: document.querySelector(_domClass.asidenav),
    asidelist: document.querySelector(_domClass.asidelist),
    asideitem: document.querySelectorAll(_domClass.asideitem)
  };
})();

//Portfolio UI Controller
let fnportfolioController = (function(fnport) {
  let shownavigation = false;

  let fnportfolioEvent = function() {
    fnport.asidebtn.addEventListener("click", fntoggleNavigation);
  };

  let fntoggleNavigation = function() {
    if (!shownavigation) {
      fnportfolioUI.asidebtn.classList.add("close");
      fnportfolioUI.asideimage.classList.add("show");
      fnportfolioUI.asidemenu.classList.add("show");
      fnportfolioUI.asidenav.classList.add("show");
      fnportfolioUI.asidelist.classList.add("show");

      //Add show Class to list-items
      fnportfolioUI.asideitem.forEach(item => item.classList.add("show"));

      shownavigation = true;
    } else {
      fnportfolioUI.asidebtn.classList.remove("close");
      fnportfolioUI.asideimage.classList.remove("show");
      fnportfolioUI.asidemenu.classList.remove("show");
      fnportfolioUI.asidenav.classList.remove("show");
      fnportfolioUI.asidelist.classList.remove("show");

      //Remove show class from list-items
      fnportfolioUI.asideitem.forEach(item => item.classList.remove("show"));

      shownavigation = false;
    }
  };

  return {
    initEvent: function() {
      fnportfolioEvent();
    }
  };
})(fnportfolioUI);

fnportfolioController.initEvent();
