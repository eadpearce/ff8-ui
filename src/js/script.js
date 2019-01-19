
var app = new Vue({
  el: '#app',
  data: {
    mainMenuItems: mainMenuItems,
    junctionMenuItems: junctionMenuItems,
    partyMembers: partyMembers,
    partyMemberIDs: partyMemberIDs,
    nonPartyMembers: nonPartyMembers,
    menuIDs: menuIDs,
    menuHelp: 'Junction Menu',
    mainMenuOpen: true,
    currentMenu: 'main',
    currentCharacter: 0,
    activeClass: 'active',
    gfs: gfs,
    stats1: stats1,
    stats2: stats2
  },
  methods: {
    showMenu: showMenu,
    closeMainMenu: closeMainMenu,
    handleAppKeydown: handleAppKeydown,
    cycleCharacters: cycleCharacters,
  }
});

function showMenu(e) {
  if (app.mainMenuOpen) {
    closeMainMenu(e);
    app.currentMenu = e.target.id;
    $('#'+e.target.id+'-menu').delay(250).fadeIn(250);
  } else return;
}

function closeMainMenu(e) {
  app.mainMenuOpen = false;
  $('.main-menu').addClass('collapsed');
  $('#main-menu-container').addClass('collapsed');

  $('#left-content').fadeOut(500);
  $('#player-stats').fadeOut(500);

  // copy the array
  var remainingItems = app.menuIDs.slice(0);
  // remove this id from the array as we want to hide the others
  var index = app.menuIDs.indexOf(e.target.id);
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
    $('#'+itemID).addClass('dn');
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
  if (e.which === 27) {
    this.mainMenuOpen = true;
    if (this.currentMenu !== 'main') {
      $('#'+this.currentMenu+'-menu').fadeOut(250);
    }

    $('.main-menu').removeClass('collapsed');
    $('#main-menu-container').removeClass('collapsed');
    $('.menu-item').removeClass('dn');
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

  if (this.currentMenu === 'junction') {
    if (e.which === 39) { // right arrow
      cycleCharacters('left');
    } else if (e.which === 37) { // left arrow
      cycleCharacters('right');
    }
  }
}

function cycleCharacters(forward) {
  const currentCharacterID = app.partyMemberIDs[app.currentCharacter];
  let backward;
  if (forward === 'right') backward = 'left';
  else backward = 'right';

  // move the character on forward side to backward side
  $(`#junction-menu .inactive-${forward}`)
    .removeClass(`inactive-${forward}`)
    .addClass(`inactive-${backward}`);

  // move starting character to forward side
  $('#'+currentCharacterID).addClass(`inactive-${forward}`);

  // update new currentCharacter
  if (forward == 'left') {
    if (app.currentCharacter < 2) app.currentCharacter++;
    else app.currentCharacter = 0;
  } else {
    if (app.currentCharacter > 0) app.currentCharacter--;
    else app.currentCharacter = 2;
  }

  // move new character to centre
  const nextCharacter = partyMemberIDs[app.currentCharacter];
  $('#'+nextCharacter).removeClass(`inactive-${backward}`);

}
