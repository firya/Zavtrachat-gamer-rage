var prevContentHeight = null;
const TEXT = ' — геймеры в ярости';

const scrollHandler = () => {
  if (document.body.scrollHeight > prevContentHeight) {
    prevContentHeight = document.body.scrollHeight;
    var titles = document.querySelectorAll('.content-header__title');

    for (let i = 0; i < titles.length; i++) {
      const title = titles[i];

      const wrap = title.querySelector('.l-no-wrap');
      const checkmark = wrap ? wrap.querySelector('a') : null;

      console.log(checkmark)

      const textNode = document.createTextNode(TEXT);

      if (!title.classList.contains("is-raged")) {
        title.classList.add("is-raged");
        if (checkmark) {
          checkmark.parentNode.insertBefore(textNode, checkmark);
        } else {
          title.innerHTML = `${title.innerHTML}${TEXT}`;
        }
      }
    }
  }
}
window.addEventListener("scroll", e => scrollHandler());
window.addEventListener('load', e => scrollHandler());