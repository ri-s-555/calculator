// function updateTime() {
//     const now = new Date(); // Получаем текущее время
//     const hours = String(now.getHours()).padStart(2, '0'); // Получаем часы
//     const minutes = String(now.getMinutes()).padStart(2, '0'); // Получаем минуты
//     const seconds = String(now.getSeconds()).padStart(2, '0'); // Получаем секунды
    
//     // Форматируем время
//     const formattedTime = `${hours}:${minutes}:${seconds}`;
//     document.getElementById("currentTime").innerText = formattedTime; // Обновляем текст на странице
// }

// updateTime(); // Вызываем функцию сразу, чтобы сразу показать текущее время
// setInterval(updateTime, 1000); // Обновляем время каждую секунду