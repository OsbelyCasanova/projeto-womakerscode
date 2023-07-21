function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (userAnswer) {
      const correctAnswer = 'b';

      if (userAnswer.value === correctAnswer) {
        document.getElementById('quiz-feedback').textContent = '¡Respuesta correcta!';
      } else {
        document.getElementById('quiz-feedback').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
      }
    } else {
      document.getElementById('quiz-feedback').textContent = 'Debes seleccionar una respuesta antes de verificar.';
    }
  }

  function updateOptionStyle(selectedOption) {
    const options = document.querySelectorAll('.quiz-option label');
    options.forEach(option => {
      option.classList.remove('active');
    });

    selectedOption.parentElement.classList.add('active');
  }

const carouselTrack = document.querySelector(".carousel-track");
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    carouselTrack.style.transform = `translateX(-${index * 200}%)`;
    slideIndex = index;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

showSlide(slideIndex);

