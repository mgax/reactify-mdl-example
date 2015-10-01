(function() {

class Menu extends React.Component {

  render() {
    return (
      <div className="demo-avatar-dropdown">
        <span>hello@example.com</span>
        <div className="mdl-layout-spacer"></div>
        <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <i className="material-icons" role="presentation">arrow_drop_down</i>
          <span className="visuallyhidden">Accounts</span>
        </button>
        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
          <li className="mdl-menu__item">hello@example.com</li>
          <li className="mdl-menu__item">info@example.com</li>
          <li className="mdl-menu__item">
            <i className="material-icons">add</i>
            Add another account...
          </li>
        </ul>
      </div>
    )
  }

}

var box = document.querySelector('#here')
box.innerHTML = React.renderToStaticMarkup(<Menu />)
componentHandler.upgradeDom()

})();
