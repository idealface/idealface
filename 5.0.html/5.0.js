const scrollContainer = document.getElementById("scrollContainer");
const collection = scrollContainer.querySelector(".collection");
const headwraps = document.querySelectorAll(".headwrap");

let animationId; // 用來存儲 setInterval 的 ID
let isScrolling = true; // 判斷滾動是否啟動的標誌

// 滾動函數
function startScrolling() {
  if (!isScrolling) return; // 如果滾動已停止，不執行
  animationId = setInterval(() => {
    const transformValue = getComputedStyle(collection).transform;
    const currentTransform =
      transformValue === "none"
        ? 0
        : parseFloat(transformValue.split(",")[4] || 0);
    collection.style.transform = `translateX(${currentTransform - 1}px)`;
    if (Math.abs(currentTransform) >= collection.offsetWidth / 2) {
      // 重置滾動
      collection.style.transform = "translateX(0)";
    }
  }, 16); // 16ms 約等於 60fps
}

// 停止滾動函數
function stopScrolling() {
  clearInterval(animationId);
}

// 監聽 headwrap 點擊事件
headwraps.forEach((headwrap) => {
  headwrap.addEventListener("click", () => {
    console.log("Clicked on a headwrap, stopping scrolling");
    isScrolling = false; // 停止滾動
    stopScrolling(); // 清除滾動的 setInterval
  });
});

// 滑鼠移出時恢復滾動
scrollContainer.addEventListener("mouseleave", () => {
  console.log("Mouse left, starting scrolling");
  isScrolling = true; // 允許滾動
  startScrolling(); // 重啟滾動
});

// 初始化滾動
startScrolling();
