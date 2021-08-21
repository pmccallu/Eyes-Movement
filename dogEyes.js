const pupils = document.getElementsByClassName('pupil');
const iris = document.getElementsByClassName('iris');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    pupils[i].style.left = x;
    pupils[i].style.top = y;
    pupils[i].transform = 'translate(-' + x + ',-' + y + ')';
    iris[i].style.left = x;
    iris[i].style.top = y;
    iris[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

const tongue = document.getElementsByClassName('tongue');
tongue[0].style.left = '-140px';
tongue[0].style.top = '400px';

setInterval(() => {
  tongue[0].style.top = parseInt(tongue[0].style.top) + 10 + 'px';

  setTimeout(() => {
    tongue[0].style.top = parseInt(tongue[0].style.top) - 10 + 'px';
  }, 250);
}, 500)