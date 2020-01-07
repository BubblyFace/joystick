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
    const widgetDict = require('./config.js');
  
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
