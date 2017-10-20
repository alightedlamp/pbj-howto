import $ from 'jquery';

const instructions = [
  'Get out a plate. No one likes a mess',
  'Take bread out of pantry',
  'Take out peanut butter from pantry',
  'Take jelly out of fridge',
  'Take knife out of drawer',
  'Open peanut butter jar',
  'Get out two pieces of break and put on plate',
  'Use knife to get peanut butter out of jar',
  'Spread on one piece of bread',
  'Open jelly jar',
  "Take out a spoon to spread the jelly, because it's easier that way",
  'Get jelly out of jar and spread on the piece of bread that does not already have peanut button it',
  'Combine the two pieces of bread',
  'Chomp 🙃'
];

const checkboxes = $('.check');
const instructionsWrapper = $('.instructions-wrapper');

let currentStep = 0;

const addStep = currentStep => {
  $('.instruction p').text(instructions[currentStep]);
};

$('.lets-go').click(e => {
  e.preventDefault();
  $('.instructions-wrapper').css({
    height: 'inherit',
    opacity: '1',
    marginTop: '-100px'
  });
  $('.lets-go').css({
    opacity: '0',
    transform: 'translateX(-300px)'
  });

  addStep(currentStep);
});

$('.next-step').click(e => {
  e.preventDefault();
  addStep(currentStep);
  currentStep++;
});
