const cartItems = document.querySelectorAll('[class^="cart"]');
cartItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cartItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('blur'); // Добавляем класс "blur" ко всем элементам, кроме текущего
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        cartItems.forEach(otherItem => {
            otherItem.classList.remove('blur'); // Удаляем класс "blur" у всех элементов
        });
    });
});
document.querySelectorAll(".cart").forEach(cart => {
  const likeBtn = cart.querySelector(".like-btn");
  const likeCount = cart.querySelector(".like-count");

  let liked = false;

  likeBtn.addEventListener("click", () => {
    let count = parseInt(likeCount.textContent);

    if (!liked) {
      count += 1;
      likeBtn.style.color = "red";
    } else {
      count -= 1;
      likeBtn.style.color = "inherit";
    }

    likeCount.textContent = count;
    liked = !liked;
  });
});
