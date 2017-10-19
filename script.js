const checkboxes = document.querySelector('input');
const instructionsWrapper = document.querySelector('.instructions-wrapper');
const startBtn = document
  .querySelector('.lets-go')
  .addEventListener('click', e => {
    e.preventDefault();
    // this.style.display = 'none';
    instructionsWrapper.style.height = 'inherit';
    instructionsWrapper.style.opacity = '1';
    instructionsWrapper.style.marginTop = '-100px';
    document.querySelector('.lets-go').style.opacity = '0';
    document.querySelector('.lets-go').style.transform = 'translateX(-300px)';
  });
