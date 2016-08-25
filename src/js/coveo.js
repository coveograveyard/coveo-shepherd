$(function () {
  // add coveo-styleguide to the body
  $('body').addClass('coveo-styleguide');

  var tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-coveo',
      scrollTo: true,
      showCancelLink: true
    }
  });

  tour.addStep('example', {
    title: 'Example Shepherd',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    attachTo: '.body top',
    buttons: [{
      classes: 'shepherd-button-primary',
      text: 'Next',
      action: tour.next
    }]
  });

  tour.addStep('Testing the next', {
    title: 'Example Shepherd',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet quam et ante aliquam, et sagittis ipsum sagittis. Nulla sed luctus arcu.<br/><br/>Donec tincidunt elementum euismod. Praesent pulvinar aliquam dui, sit amet tempus est convallis vel. Quisque consectetur ullamcorper tincidunt. Integer enim urna, facilisis vel imperdiet vitae, maximus quis nisi.",
    attachTo: 'code.language-css bottom',
    buttons: [{
      text: 'Prev',
      action: tour.back
    }, {
      classes: 'shepherd-button-primary',
      text: 'Next',
      action: tour.next
    }]
  });

    tour.addStep('Testing the next', {
    text: 'Nice I jumped',
    attachTo: 'li top',
    buttons: [{
      text: 'Prev',
      action: tour.back
    }, {
      classes: 'shepherd-button-primary',
      text: 'Next',
      action: tour.next
    }]
  });


  tour.start();

  console.log(tour);
});