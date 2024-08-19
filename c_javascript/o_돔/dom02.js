document.addEventListener('DOMContentLoaded', () => {
  const a = document.getElementById('textContent');
  const b = document.getElementById('innerHTML');

  a.textContent = '<h2> textContent 속성 <h2>'
  b.innerHTML = '<h2> inner 속성 <h2>'
});

document.addEventListener('DOMContentLoaded', () => {
  const dogs = document.querySelectorAll('.dogs');

  dogs.forEach((dog, index) => {
    const width = (index + 1) * 100;

    dog.setAttribute('width',width);
    dog.setAttribute('height','250px');

    


  })
})