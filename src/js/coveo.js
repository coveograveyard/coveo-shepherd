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
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    attachTo: '.body bottom'
  });

  tour.addStep('Testing the next', {
    title: 'Example Shepherd',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet quam et ante aliquam, et sagittis ipsum sagittis. Nulla sed luctus arcu. Donec tincidunt elementum euismod. Praesent pulvinar aliquam dui, sit amet tempus est convallis vel. Quisque consectetur ullamcorper tincidunt. Integer enim urna, facilisis vel imperdiet vitae, maximus quis nisi. Aenean id imperdiet arcu. Proin venenatis, libero at sollicitudin lacinia, neque diam luctus velit, in rutrum est nunc ac tortor. Duis eget auctor elit. Sed molestie felis in tortor egestas bibendum. Duis odio orci, auctor non venenatis vel, interdum at augue. Integer non elit elementum, aliquet metus eu, tempus mauris. Vestibulum pharetra ultrices arcu, vulputate fringilla tortor pharetra id. Phasellus nec arcu mollis, interdum turpis a, suscipit nulla.<br/><br/>Donec vulputate urna justo, imperdiet aliquam nisl luctus vitae. Donec imperdiet dolor metus, in congue elit gravida eget. Quisque aliquam sit amet enim id porttitor. Phasellus congue luctus lorem, in pretium neque pulvinar vel. In iaculis ante ac nunc dapibus pretium. Integer sed ipsum nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eu magna et tellus blandit gravida. Integer auctor erat eu nibh elementum, id vehicula sapien euismod. Suspendisse scelerisque scelerisque quam id ullamcorper.",
    attachTo: 'pre.language-css bottom',
    buttons: [{
      text: 'Prev',
      action: tour.back
    }, {
      text: 'Next',
      action: tour.next
    }]
  });

    tour.addStep('Testing the next', {
    // title: 'Example Shepherd',
    text: 'Nice I jumped',
    attachTo: 'li top',
    buttons: [{
      text: 'Prev',
      action: tour.back
    }, {
      text: 'Next',
      action: tour.next
    }]
  });


  tour.start();

  console.log(tour);
});