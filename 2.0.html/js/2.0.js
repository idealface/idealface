document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("carouselControlPrev");
  const nextButton = document.getElementById("carouselControlNext");
  const carousel = document.getElementById("carouselExample");

  // 初始隱藏左按鍵
  prevButton.disabled = true;

  // 監聽輪播切換事件
  carousel.addEventListener("slide.bs.carousel", function (e) {
    const nextIndex = e.to; // 即將切換到的頁面索引
    const totalItems = document.querySelectorAll(".carousel-item").length;

    // 如果切換到第一頁，禁用左鍵
    if (nextIndex === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    // 如果切換到最後一頁，禁用右鍵
    if (nextIndex === totalItems - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const decorationImage = document.getElementById("decorationImage");
  const carousel = document.getElementById("carouselExample");

  // 監聽輪播切換事件
  carousel.addEventListener("slide.bs.carousel", function (e) {
    const nextIndex = e.to; // 即將切換到的頁面索引

    // 在第一頁時顯示裝飾圖檔，其他頁面隱藏
    if (nextIndex === 0) {
      decorationImage.classList.remove("hidden");
    } else {
      decorationImage.classList.add("hidden");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const finalButton = document.getElementById("finalButton");
  const prevButton = document.getElementById("carouselControlPrev");
  const nextButton = document.getElementById("carouselControlNext");
  const carousel = document.getElementById("carouselExample");

  // 初始化按鈕狀態
  finalButton.classList.remove("show");
  nextButton.disabled = false;

  // 監聽輪播切換事件
  carousel.addEventListener("slide.bs.carousel", function (e) {
    const nextIndex = e.to; // 即將切換到的頁面索引
    const totalItems = document.querySelectorAll(".carousel-item").length;

    // 如果切換到最後一頁
    if (nextIndex === totalItems - 1) {
      finalButton.classList.add("show"); // 顯示按鈕
      nextButton.disabled = true; // 禁用右鍵
    } else {
      finalButton.classList.remove("show"); // 隱藏按鈕
      nextButton.disabled = false; // 啟用右鍵
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("carouselControlPrev");
  const nextButton = document.getElementById("carouselControlNext");
  const carousel = document.getElementById("carouselExample");
  const submitButtonContainer = document.getElementById(
    "submitButtonContainer"
  );
  const submitButton = document.getElementById("submitButton");

  const allRadioGroups = document.querySelectorAll(".carousel-item");
  const totalItems = allRadioGroups.length;

  function checkAllAnswered() {
    return Array.from(allRadioGroups).every((item) => {
      const radios = item.querySelectorAll('input[type="radio"]');
      return Array.from(radios).some((radio) => radio.checked);
    });
  }

  // 更新送出按鈕狀態
  function updateSubmitButton() {
    const allAnswered = checkAllAnswered();
    if (allAnswered) {
      submitButton.disabled = false;
      submitButton.querySelector(".disable").style.display = "none";
      submitButton.querySelector(".default").style.display = "block";
    } else {
      submitButton.disabled = true;
      submitButton.querySelector(".disable").style.display = "block";
      submitButton.querySelector(".default").style.display = "none";
      submitButton.querySelector(".hover").style.display = "none";
    }
  }

  // 初始化按鈕狀態
  submitButtonContainer.style.display = "none";
  submitButton.disabled = true;

  // 監聽輪播切換事件
  carousel.addEventListener("slide.bs.carousel", function (e) {
    const nextIndex = e.to;

    // 如果切換到最後一頁，顯示送出按鈕
    if (nextIndex === totalItems - 1) {
      submitButtonContainer.style.display = "block";
      updateSubmitButton();
    } else {
      submitButtonContainer.style.display = "none";
    }
  });

  // 監聽每個radio的選擇事件
  allRadioGroups.forEach((item) => {
    const radios = item.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        updateSubmitButton();
      });
    });
  });

  // 處理送出按鈕的點擊事件
  submitButton.addEventListener("click", () => {});

  // 收集選擇結果的函數
  function collectResults() {
    const results = {};
    document.querySelectorAll(".carousel-item").forEach((item, index) => {
      const selectedRadio = item.querySelector('input[type="radio"]:checked');
      if (selectedRadio) {
        const label = selectedRadio.nextElementSibling; // 對應的 label
        const imgSrc = label.querySelector("img").src; // 獲取圖片的 src
        results[`page${index + 1}`] = imgSrc; // 存儲每頁的結果
      }
    });
    return results;
  }

  // 處理送出按鈕的點擊事件
  submitButton.addEventListener("click", () => {
    if (!submitButton.disabled) {
      const results = collectResults();
      localStorage.setItem("userSelections", JSON.stringify(results)); // 儲存結果到 localStorage
      window.location.href = "../4.0.html/4.0.html"; // 跳轉到結果頁
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const prevIcon = document.querySelector(".carousel-control-prev-icon");
  const nextIcon = document.querySelector(".carousel-control-next-icon");

  if (prevIcon) prevIcon.style.display = "none"; // 隱藏預設的左按鈕圖示
  if (nextIcon) nextIcon.style.display = "none"; // 隱藏預設的右按鈕圖示
});
