(function () {
  const TEXT = [{
    value: ' — геймеры в ярости',
    pos: 'after'
  }, {
    value: 'Геймеры высмеяли новость о том, что',
    pos: 'before'
  }];
  var windowUrl = null;
  var prevPageHeight = 0;

  function scrollHandler() {
    if (prevPageHeight < document.documentElement.scrollHeight) {
      prevPageHeight = document.documentElement.scrollHeight;
      setText();
    }
  }

  function setText() {
    var titles = document.querySelectorAll('.content-header__title');

    for (let i = 0; i < titles.length; i++) {
      const title = titles[i];
      const textObj = TEXT[Math.round(Math.random() * (TEXT.length - 1))];

      const wrap = title.querySelector('.l-no-wrap');
      const checkmark = wrap ? wrap.querySelector('a') : null;

      const textNode = document.createTextNode(textObj.value);

      if (!title.classList.contains("is-raged")) {
        title.classList.add("is-raged");
        if (textObj.pos == 'after') {
          if (checkmark) {
            checkmark.parentNode.insertBefore(textNode, checkmark);
          } else {
            title.innerHTML = `${title.innerHTML}${textObj.value}`;
          }
        } else {
          title.innerHTML = `${textObj.value} ${title.innerHTML.toLowerCase()}`;
        }
      }
    }
  }

  function init() {
    window.addEventListener("scroll", e => scrollHandler());

    setInterval(() => {
      if (windowUrl != window.location.href) {
        windowUrl = window.location.href;
        setText();
      }
    }, 1000);

    setText();
  }

  window.addEventListener('load', e => init());
}())