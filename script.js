
$(init);

var menuIDs = [
  'junction',
  'item',
  'magic',
  'status',
  'gf',
  'ability',
  'switch',
  'card',
  'config',
  'tutorial',
  'save'
];

var menuOpen = true;

function init() {
  setupEventListeners();
}

function setupEventListeners() {

  // MOUSE HOVER
  $('.menu-item').hover(function(e) {
    if (menuOpen) handleHover(e, $(this));
    else return;
  });

  // KEYBOARD FOCUS
  $('.menu-item').focusin(function(e) {
    if (menuOpen) handleFocus(e, $(this));
    else return;
  });

  // reopen main menu on esc
  $(document).keydown(function(e) {
    if (e.which == 27) {
      menuOpen = true;
      $('.main-menu').removeClass('collapsed');

      // enable keyboard focus again
      $('.menu-item').attr('tabIndex', 0);

      $('.menu-item').parent().animate({
        opacity: 1,
        top: 0,
      }, 250);
    }
  })

  // CLICK
  $('.menu-item').click(function(e) {

    menuOpen = false;

    $('#menu-title').text($(this).text());

    $('.main-menu').addClass('collapsed');

    var index = menuIDs.indexOf(this.id);

    // copy the array
    var remainingItems = menuIDs.slice(0);
    // remove this id from the array as we want to hide the others
    remainingItems.splice(index, 1);

    // move selected item to top
    // each item is 36px tall
    // move up 36 x the number of items before this one
    var distance = index * 40;

    $('#'+this.id).parent().animate({
      top: '-='+distance,
    }, 250);

    remainingItems.forEach(function(itemID) {

      // disable keyboard focus
      $('#'+itemID).attr('tabIndex', -1);

      // animate
      $('#'+itemID).parent().animate({
        opacity: 0,
        top: '-='+distance,
      }, 250);
    });
  });
}

function handleHover(e, $this) {
  if (e.type == 'mouseenter') {
    $('#menu-title').text($this.text());
  }
}

function handleFocus(e, $this) {
  $('#menu-title').text($this.text());
}
