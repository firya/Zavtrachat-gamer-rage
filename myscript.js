var prevContentHeight = null

const scrollHandler = () => {
  if (document.body.scrollHeight > prevContentHeight) {
    var titles = document.querySelectorAll('.content-header__title')

    for (let i = 0; i < titles.length; i++) {
      const title = titles[i];
      if (!title.classList.contains("is-raged")) {
        title.classList.add("is-raged");
        title.innerHTML = `${title.innerHTML}. Геймеры в ярости`;
      }
    }
  }
}
window.addEventListener("scroll", e => scrollHandler());
scrollHandler();