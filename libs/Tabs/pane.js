var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import classNames from 'classnames';

var Pane = function (_React$Component) {
  _inherits(Pane, _React$Component);

  function Pane(props) {
    _classCallCheck(this, Pane);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  Pane.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        show = _props.show,
        className = _props.className,
        style = _props.style;

    var styleWapper = show ? _extends({}, style) : _extends({}, style, { display: 'none' });
    return React.createElement(
      'div',
      {
        style: styleWapper,
        className: classNames('dhArt-tabs__pane', (_classNames = {}, _classNames[className] = !!className, _classNames)) },
      children
    );
  };

  return Pane;
}(React.Component);

export default Pane;