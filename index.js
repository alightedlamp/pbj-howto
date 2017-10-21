import $ from 'jquery';
import { task, instructions } from './instructions';

$(() => {
  $('header h1').after(`<h2 class='subtitle'>${task}</h2>`);

  const checkboxes = $('.check');
  const instructionsWrapper = $('.instructions-wrapper');

  const showEnd = () => {
    $('.instructions p').text('You did it! Good work. 👍');
  };
  const swapImg = currentStep => {};

  let currentStep = 0;

  const addStep = currentStep => {
    $('.instruction p').fadeOut(150, () => {
      $('.instruction p').text(
        `${currentStep + 1}. ${instructions[currentStep].step}`
      );
    });
    $('.instruction p').fadeIn();

    swapImg(currentStep);
  };

  $('.lets-go').bind('click', e => {
    e.preventDefault();

    $('.instructions-wrapper').css({
      height: 'inherit',
      opacity: '1',
      marginTop: '-220px'
    });
    $(this).css({
      opacity: '0',
      transform: 'translateX(-300px)'
    });

    addStep(currentStep);
  });

  $('.next-step').click(e => {
    e.preventDefault();
    if (currentStep < instructions.length - 1) {
      currentStep++;
      addStep(currentStep);
    } else {
      showEnd();
    }
  });
});
