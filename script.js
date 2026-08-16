const passwordInput = document.getElementById("password");
const enterButton = document.getElementById("enter-button");
const errorMessage = document.getElementById("error-message");

const passwordScreen = document.getElementById("password-screen");
const mainSite = document.getElementById("main-site");


// ==============================
// ここで合言葉を変更できる
// ==============================

const correctPassword = "1215";


// ==============================
// 合言葉チェック
// ==============================

function checkPassword() {

  const input = passwordInput.value.trim();

  if (input === correctPassword) {

    errorMessage.textContent = "";

    openSite();

  } else {

    errorMessage.textContent =
      "ブッブー😼";

    passwordInput.value = "";

  }

}


// ==============================
// サイトを開く
// ==============================

function openSite() {

    const shootingStar =
  document.getElementById("shooting-star");

shootingStar.classList.add("shoot");
  passwordScreen.style.transition =
    "opacity 1.5s ease";

  passwordScreen.style.opacity = "0";


  setTimeout(() => {

    passwordScreen.style.display = "none";

    mainSite.style.display = "block";

    mainSite.style.opacity = "0";

    mainSite.style.transition =
      "opacity 2s ease";


    setTimeout(() => {

      mainSite.style.opacity = "1";

    }, 100);

  }, 1500);

}


// ==============================
// ボタン
// ==============================

enterButton.addEventListener(
  "click",
  checkPassword
);


// ==============================
// Enterキーでも開ける
// ==============================

passwordInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {

      checkPassword();

    }

  }
);
// ==============================
// 好きなところ
// ==============================

const loveStars =
  document.querySelectorAll(".love-star");

const loveMessage =
  document.getElementById("love-message");


loveStars.forEach(function(star) {

  star.addEventListener("click", function() {

    loveStars.forEach(function(item) {
      item.classList.remove("active");
    });

    star.classList.add("active");

    loveMessage.style.opacity = "0";

    setTimeout(function() {

      loveMessage.textContent =
        star.dataset.message;

      loveMessage.style.opacity = "1";

    }, 200);

  });

});
// ==============================
// OPEN WHEN
// ==============================

const whenCards =
  document.querySelectorAll(".when-card");

const whenLetter =
  document.getElementById("when-letter");

const whenTitle =
  document.getElementById("when-title");

const whenMessage =
  document.getElementById("when-message");

const whenClose =
  document.getElementById("when-close");


whenCards.forEach(function(card) {

  card.addEventListener("click", function() {

    whenTitle.textContent =
      card.dataset.title;

    whenMessage.textContent =
      card.dataset.message;

    whenLetter.classList.add("show");


    setTimeout(function() {

      whenLetter.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 100);

  });

});


whenClose.addEventListener(
  "click",
  function() {

    whenLetter.classList.remove("show");

  }
);