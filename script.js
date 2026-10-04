const siteNav = document.querySelector("#site-nav");

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.bootstrap && siteNav.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(siteNav).hide();
    }
  });
});
