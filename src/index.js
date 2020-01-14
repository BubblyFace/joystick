let widgetArr = [];

const options = {
  root,
  height: window.innerHeight,
  width: window.innerWidth
};

init(options);

function init(initOptions) {
  let root = document.getElementById('root');
  if (!root) {
    console.error(`Donnot have root element!`)
  }

  canvasInit(initOptions);
  widgetInit(initOptions);
}

function canvasInit(options) {
  let { root, height, width, background = '#000000' } = options;

  const canvas = document.createElement('canvas');

  canvas.id = 'root-canvas';
  canvas.height = height;
  canvas.width = width;

  root.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = background;
}

function widgetInit(options) {
  const widgetDict = import ('./config.js');

  Object.keys(widgetDict).forEach(widgetName => {
    let widget = new widgetDict[widgetName](options);
    widgetArr.push({
      name: widgetName,
      widget
    });
  });
}