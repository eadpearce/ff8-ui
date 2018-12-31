
$(init);

function init() {
  $title = $('#menu-title');
  setupEventListeners();
}

function setupEventListeners() {
  $('.menu-item').hover(function(e) {
    handleHover(e, $(this));
  });

  $('.menu-item').focusin(function(e) {
    handleFocus(e, $(this));
  });
}

function handleHover(e, $this) {
  if (e.type == 'mouseenter') {
    $title.text($this.text());
  }
}

function handleFocus(e, $this) {
  $title.text($this.text());
}
