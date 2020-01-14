(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  'stick_action': require('../widgets/stick_action/index.js'),
  'stick_direction': require('../widgets/stick_direction/index.js')
}
},{"../widgets/stick_action/index.js":3,"../widgets/stick_direction/index.js":4}],2:[function(require,module,exports){
let widgetArr = [];

const options = {
  root,
  height: window.innerHeight,
  width: window.innerWidth
};

class Joystick {
  constructor(options) {
    this.widgetArr = [];
    this.Instance = null;
    this.init(options);
  }

  init(initOptions) {
    let root = document.getElementById('root');
    if(!root) {
      console.error(`Donnot have root element!`)
    }

    canvasInit(initOptions);
    widgetInit(initOptions);
  }

  canvasInit(options) {
    let { root, height, width, background = '#000000' } = options;
    
    const canvas = document.createElement('canvas');
  
    canvas.id = 'root-canvas';
    canvas.height = height;
    canvas.width = width;
  
    root.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = background;
  }

  widgetInit(options) {
    const widgetDict = require('./config/widget-dict.js');
  
    Object.keys(widgetDict).forEach(widgetName => {
      let widget = new widgetDict[widgetName](options);
      widgetArr.push({
        name: widgetName,
        widget
      });
    });
  }
}

module.exports = Joystick.Instance ? Joystick.Instance : new Joystick(options);

},{"./config/widget-dict.js":1}],3:[function(require,module,exports){
module.exports = function () {

}
},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}]},{},[2]);
