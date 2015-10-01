(function() {

var box = document.querySelector('.demo-avatar-dropdown')
box.innerHTML =
'  <span>hello@example.com</span>\n'+
'  <div class="mdl-layout-spacer"></div>\n'+
'  <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">\n'+
'    <i class="material-icons" role="presentation">arrow_drop_down</i>\n'+
'    <span class="visuallyhidden">Accounts</span>\n'+
'  </button>\n'+
'  <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">\n'+
'    <li class="mdl-menu__item">hello@example.com</li>\n'+
'    <li class="mdl-menu__item">info@example.com</li>\n'+
'    <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>\n'+
'  </ul>\n'

componentHandler.upgradeElement(box)

})();
