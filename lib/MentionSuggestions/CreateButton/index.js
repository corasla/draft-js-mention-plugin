'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateButton = function (_Component) {
  _inherits(CreateButton, _Component);

  function CreateButton(props) {
    _classCallCheck(this, CreateButton);

    var _this = _possibleConstructorReturn(this, (CreateButton.__proto__ || Object.getPrototypeOf(CreateButton)).call(this, props));

    _this.clickedCreate = function () {
      _this.props.clickedCreate();
    };

    _this.mDown = function (me) {
      me.preventDefault();
    };

    return _this;
  }

  _createClass(CreateButton, [{
    key: 'render',
    value: function render() {
      var _props$theme = this.props.theme;
      var theme = _props$theme === undefined ? {} : _props$theme;

      var className = this.props.isFocused ? theme.mentionCreateButtonFocused : theme.mentionCreateButton;
      return _react2.default.createElement(
        'button',
        { onClick: this.clickedCreate,
          onMouseDown: this.mDown,
          className: className },
        '+ Create Tag'
      );
    }
  }]);

  return CreateButton;
}(_react.Component);

CreateButton.propTypes = {
  clickedCreate: _react.PropTypes.func.isRequired
};
exports.default = CreateButton;