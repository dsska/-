const today = new Date();
const day = today.getDate();   // число месяца
const month = today.getMonth(); // 0 = январь, 8 = сентябрь
const year = today.getFullYear();

// Проверяем: если сегодня сентябрь 2025 — подсвечиваем
if (month === 8 && year === 2025) {
  const cell = document.querySelector(`[data-day='${day}']`);
  if (cell) {
    cell.classList.add("today");
  }

  // Все прошедшие даты делаем серыми
  document.querySelectorAll("[data-day]").forEach(td => {
    if (+td.dataset.day < day) {
      td.classList.add("past");
    }
  });
}
