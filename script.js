window.onload=function(){
      var menu = document.querySelector("#menuNavigation");
      var header = document.querySelector("#header");
      function scrolled(){
            var windowHeight = document.body.clientHeight,
            currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

            menu.className = (currentScroll >= header.offsetHeight) ? "fixe" : "";
      }
      addEventListener("scroll", scrolled, false);
}
