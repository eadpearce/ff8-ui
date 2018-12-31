
var app = new Vue({
  el: '#app',
  data: {
    items: menuItems,
    menuIDs: menuIDs,
    menuHelp: 'Junction Menu',
    mainMenuOpen: true,
    currentMenu: 'main',
    activeClass: 'active',
    gfs: gfs,
  },
  methods: {
    showMenu: showMenu,
    closeMainMenu: closeMainMenu,
    handleAppKeydown: handleAppKeydown,
  }
});

function showMenu(e) {
  if (this.mainMenuOpen) {
    this.mainMenuOpen = false;
    closeMainMenu(e);
    this.currentMenu = e.target.id;
    $('#'+e.target.id+'-menu').delay(250).fadeIn(250);
  } else return;
}

function closeMainMenu(e) {
  this.mainMenuOpen = false;
  $('.main-menu').addClass('collapsed');
  $('#main-menu-container').addClass('collapsed');

  $('#left-content').fadeOut(500);
  $('#player-stats').fadeOut(500);

  // copy the array
  var remainingItems = this.menuIDs.slice(0);
  // remove this id from the array as we want to hide the others
  var index = this.menuIDs.indexOf(e.target.id);
  remainingItems.splice(index, 1);

  // move selected item to top
  // each item is 40px tall
  // move up 40 x the number of items before this one
  var distance = index * 40;
  $(e.target).addClass('selected');
  $(e.target).parent().animate({
    top: '-='+distance,
  }, 250);

  remainingItems.forEach(function(itemID) {
    $('#'+itemID).addClass('hidden');
    // disable keyboard focus
    $('#'+itemID).attr('tabIndex', -1);
    // animate
    $('#'+itemID).parent().animate({
      opacity: 0,
      top: '-='+distance,
    }, 250);
  });
}

function handleAppKeydown(e) {
  // reopen main menu on escape
  if (e.which == 27) {
    this.mainMenuOpen = true;
    if (this.currentMenu != 'main') {
      console.log('close', this.currentMenu);
      $('#'+this.currentMenu+'-menu').fadeOut(250);
    }

    $('.main-menu').removeClass('collapsed');
    $('.menu-item').removeClass('hidden');
    $('#player-stats').delay(250).fadeIn(250);
    $('#left-content').delay(250).fadeIn(250);

    // enable keyboard focus again
    $('.menu-item').attr('tabIndex', 0);

    $('.menu-item').parent().animate({
      top: 0,
    }, 250);

    $('.menu-item').parent().animate({
      opacity: 1,
    }, 250);

    $('.menu-item').parent().fadeIn(250);
    $('#'+this.currentMenu).focus();

    this.currentMenu = 'main';
  }
}
