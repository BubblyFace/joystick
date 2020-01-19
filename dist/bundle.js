(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** 
 * @author: shwbubbly 
 * @since: 2020-01-17 15:11:23 
 * @desc: 绘制元素的最小单元
 */
var Bubble =
/*#__PURE__*/
function () {
  function Bubble() {
    _classCallCheck(this, Bubble);
  }

  _createClass(Bubble, [{
    key: "draw",
    value: function draw() {
      throw new Error('This func must be overrided');
    }
  }]);

  return Bubble;
}();

module.exports = Bubble;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Bubble = require('../../../lib/class_define/bubble.js');

var StickAction =
/*#__PURE__*/
function (_Bubble) {
  _inherits(StickAction, _Bubble);

  function StickAction(options) {
    var _this;

    _classCallCheck(this, StickAction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StickAction).call(this));

    _this.init();

    return _this;
  }

  _createClass(StickAction, [{
    key: "draw",
    value: function draw(ctx) {}
  }]);

  return StickAction;
}(Bubble);

},{"../../../lib/class_define/bubble.js":1}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Bubble = require('../../../lib/class_define/bubble.js');

var StickDirection =
/*#__PURE__*/
function (_Bubble) {
  _inherits(StickDirection, _Bubble);

  function StickDirection(options) {
    var _this;

    _classCallCheck(this, StickDirection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StickDirection).call(this));

    _this.init(options);

    _this._centerX = 0;
    _this._centerY = 0;
    return _this;
  }

  _createClass(StickDirection, [{
    key: "init",
    value: function init(options) {
      // 1/4 area at left and bottom of screen
      var height = options.height,
          width = options.width;
      this._centerX = height * 3 / 4;
      this._centerY = width * 1 / 4;
      this._innerRadius = width / 4;
      this._outterRadius = width / 8;
      this._innerRingWidth = width / 350 * 4;
      this._innerRingWidth = width / 350 * 8;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.arc(this._centerX, this._centerY, this._outterRadius, 0, 2 * Math.PI, true);
      ctx.stroke();
      ctx.arc(this._centerX, this._centerY, this._innerRadius, 0, 2 * Math.PI, true);
      ctx.stroke();
    }
  }]);

  return StickDirection;
}(Bubble);

module.exports = StickDirection;

},{"../../../lib/class_define/bubble.js":1}],4:[function(require,module,exports){
"use strict";

module.exports = {
  'stick_action': require('../bubble/stick_action/index.js'),
  'stick_direction': require('../bubble/stick_direction/index.js')
};

},{"../bubble/stick_action/index.js":2,"../bubble/stick_direction/index.js":3}],5:[function(require,module,exports){
"use strict";

var bubbleConfig = require('./config/widget-dict.js');

init();

function init(initOptions) {
  var root = document.getElementById('root');

  if (!root) {
    console.error("Donnot have root element!");
  }

  var options = {
    height: window.innerHeight,
    width: window.innerWidth,
    root: root
  };
  canvasInit(options);
  brushInit(options, bubbleConfig);
}

function canvasInit(options) {
  var root = options.root,
      height = options.height,
      width = options.width,
      _options$background = options.background,
      background = _options$background === void 0 ? '#aaaaaa' : _options$background;
  var canvas = document.createElement('canvas');
  canvas.id = 'root-canvas';
  canvas.height = height;
  canvas.width = width;
  root.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  window.getContext = function () {
    return ctx;
  };
}

function brushInit() {}

},{"./config/widget-dict.js":4}]},{},[5]);
