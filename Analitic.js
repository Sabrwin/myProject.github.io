document.addEventListener("DOMContentLoaded", function() {
    // Получаем форму опроса
    var quizForm = document.getElementById("quizForm");
  
    // Добавляем обработчик события отправки формы
    quizForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Предотвращаем стандартное поведение формы
  
      // Получаем выбранные ответы
      var answer = document.querySelector('input[name="question2"]:checked').value;
  
      // Определяем URL для переадресации в зависимости от выбора пользователя
      var redirectUrl;
      switch (answer) {
        case 'a':
          redirectUrl = "UI.html";
          break;
        case 'b':
          redirectUrl = "UX.html";
          break;
        case 'c':
          redirectUrl = "Grafic.html";
          break;
        default:
          redirectUrl = "страница_по_умолчанию.html";
      }
  
      // Перенаправляем пользователя на нужную страницу
      window.location.href = redirectUrl;
    });
  });