function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your message has been sent!');
});

const sections = document.querySelectorAll('section');

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
      }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

const texts = ['Programmer', 'Developer', 'Problem Solver', 'Critical Thinker','Debugger'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
      count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typewriter').textContent = letter;
  if (letter.length === currentText.length) {
      count++;
      index = 0;
  }
  setTimeout(type, 200);
})();