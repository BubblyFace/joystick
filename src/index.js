init();

function init(initOptions) {
  let root = document.getElementById('root');
  if (!root) {
    console.error(`Donnot have root element!`)
  }

  let options = {
    height: window.innerHeight,
    width: window.innerWidth,
    root,
  };
  let bubbleConfig = require('./config/bubble_config.js');

  let ctx = canvasInit(options);
  let brush = brushInit(ctx, options, bubbleConfig);

}

function canvasInit(options) {
  let { root, height, width, background = '#aaaaaa' } = options;

  const canvas = document.createElement('canvas');

  canvas.id = 'root-canvas';
  canvas.height = height;
  canvas.width = width;

  root.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  window.getContext = () => ctx;

  return ctx
}


function brushInit(ctx, options, bubbleConfig) {
  let Brush = require('../lib/class_define/brush.js');
  let brush = new Brush(ctx, bubbleConfig);

  brush.addAction(bubbleConfig);

  return brush
}