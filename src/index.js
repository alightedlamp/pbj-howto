import $ from 'jquery';
import { task, instructions } from './instructions';
import { illustration } from './illustrations';

$(() => {
  $('header h1').after(`<h2 class='subtitle'>${task}</h2>`);

  const checkboxes = $('.check');
  const instructionsWrapper = $('.instructions-wrapper');

  const showEnd = () => {
    $('#step-num').css('left', '-150px');
    $('.instructions p').text('You did it! Good work. 👍');
    $('#next-step').text('Reset');
  };
  const swapImg = currentStep => {
    console.log('replacing img');
    $('#image').removeClass(`step-${currentStep - 1}`);
    $('#image').addClass(`step-${currentStep}`);
  };

  let currentStep = 0;

  const addStep = currentStep => {
    if ($('#next-step').innerHTML === 'Reset') {
      console.log(currentStep);
      $('#next-step').text('Next');
    }
    if (currentStep !== 0) {
      $('#step-num')
        .css('left', '-150px')
        .fadeOut(150, () => $('#step-num').css('left', '600px'));
      setTimeout(() => {
        $('#step-num')
          .text(currentStep + 1)
          .fadeIn(150, () => {
            $('#step-num').css({
              top: '-15px',
              left: '-15px'
            });
          });
      }, 250);
      $('.instruction p').fadeOut(200, () =>
        $('.instruction p').text(instructions[currentStep].step)
      );
    } else {
      $('#step-num')
      .text(currentStep + 1)
      .fadeIn(150, () => {
        $('#step-num').css({
          top: '-15px',
          left: '-15px'
        });
      });
      $('.instruction p').text(instructions[currentStep].step);
    }

    $('.instruction p').fadeIn(300);
    swapImg(currentStep);
  };

  $('#lets-go').bind('click', e => {
    e.preventDefault();

    $('#lets-go').css({
      opacity: '0',
      transform: 'translateX(-300px)'
    });
    $('#intro').css('opacity', 0);
    $('.instructions-wrapper').css({
      height: 'inherit',
      opacity: '1',
      marginTop: '-175px'
    });
    $('#image').html(`${illustration}`);

    addStep(currentStep);
  });

  $('#next-step').click(e => {
    e.preventDefault();
    if (currentStep < instructions.length - 1) {
      currentStep++;
      addStep(currentStep);
    } else if (currentStep === instructions.length - 1) {
      showEnd();
    } else {
      currentStep = 0;
      addStep(currentStep);
    }
  });
});
