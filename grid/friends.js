document.querySelectorAll(".maybe_friend .box_friend").forEach(friendBox => {
  const approveBtn = friendBox.querySelector(".symbol:nth-child(1)");
  const rejectBtn = friendBox.querySelector(".symbol:nth-child(2)");
  const friendName = friendBox.querySelector("p.text1").textContent;
  const friendCircle = friendBox.querySelector(".circle");

  approveBtn.addEventListener("click", () => {
    const newFriend = document.createElement("div");
    newFriend.className = "box_friend";
    newFriend.innerHTML = `
      <div class="field">
        <div class="circle"></div>
        <p class="text1">${friendName}</p>
      </div>
    `;
    document.querySelector(".friend").appendChild(newFriend);
    friendBox.remove();
  });

  rejectBtn.addEventListener("click", () => {
    friendBox.remove();
  });
});
function searchFriends() {
  const query = document.getElementById('search-input').value.toLowerCase(); // Получаем запрос из поля поиска
  const friends = document.querySelectorAll('.friend-name'); // Получаем все элементы с именами друзей

  // Проходим по каждому элементу и проверяем, содержится ли запрос в имени
  friends.forEach(friend => {
    const friendName = friend.textContent.toLowerCase(); // Получаем имя друга
    if (friendName.includes(query)) {
      friend.closest('.box_friend').style.display = ''; // Показываем элемент, если имя совпадает с запросом
    } else {
      friend.closest('.box_friend').style.display = 'none'; // Скрываем элемент, если имя не совпадает с запросом
    }
  });
}

// Добавление события для поиска при каждом вводе в поле
document.getElementById('search-input').addEventListener('input', searchFriends);