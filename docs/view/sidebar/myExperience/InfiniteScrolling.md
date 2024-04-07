# 无限视差滚动

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>无线视差图片</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        overflow: hidden;
      }

      .scroll-container {
        height: 100vh;
        position: relative;
      }

      .item {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: 1s ease-in-out;
      }

      .item img {
        position: absolute;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        transition: 1s;
      }

      .item.pre,
      .item.next {
        z-index: 1;
        height: 0;
      }

      .item.next {
        bottom: 0;
      }

      .item.next img {
        bottom: 0;
        transform: translateY(10%);
      }

      .item.pre img {
        transform: translateY(-10%);
      }

      .scroll-up .item.pre {
        height: 100%;
      }
      .scroll-up .item.pre img {
        transform: translateY(0);
      }
      .scroll-up .item.cur img {
        transform: translateY(10%);
      }

      .scroll-down .item.next {
        height: 100%;
      }
      .scroll-down .item.next img {
        transform: translateY(0);
      }
      .scroll-down .item.cur img {
        transform: translateY(-10%);
      }
    </style>
  </head>

  <body>
    
    <div class="scroll-container"></div>

    <script>
        //任何图片都可以替换
      const imgs = [
        "./图片/风景/01.jpg",
        "./图片/风景/02.jpg",
        "./图片/风景/03.jpg",
        "./图片/风景/04.jpg",
        "./图片/风景/05.jpg",
      ];

      const scrollContainer = document.querySelector(".scroll-container");

      let currentIndex = 0;
      function createItem(index) {
        const imgUrl = imgs[index];
        console.log(imgUrl);
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = '<img src="' + imgUrl + '" alt="Test Image" />';
        scrollContainer.appendChild(item);
        return item;
      }

      function resetElement() {
        scrollContainer.innerHTML = "";
        const preIndex =
          currentIndex - 1 < 0 ? imgs.length - 1 : currentIndex - 1;
        const nextIndex =
          currentIndex + 1 > imgs.length - 1 ? 0 : currentIndex + 1;

        createItem(preIndex).classList.add("pre");
        createItem(currentIndex).classList.add("cur");
        createItem(nextIndex).classList.add("next");
      }

      resetElement();

      let isAnimating = false;

      scrollContainer.addEventListener("wheel", (e) => {
        console.log(e.deltaY);
        if (!e.deltaY) {
          return;
        }
        if (isAnimating) {
          return;
        }
        isAnimating = true;
        if (e.deltaY > 0) {
          scrollContainer.classList.add("scroll-down");
          currentIndex =
            currentIndex + 1 > imgs.length - 1 ? 0 : currentIndex + 1;
        } else {
          scrollContainer.classList.add("scroll-up");
          currentIndex =
            currentIndex - 1 < 0 ? imgs.length - 1 : currentIndex - 1;
        }
      });

      scrollContainer.addEventListener("transitionend", () => {
        isAnimating = false;
        scrollContainer.classList.remove("scroll-down");
        scrollContainer.classList.remove("scroll-up");
        resetElement();
      });
    </script>
  </body>
</html>

```