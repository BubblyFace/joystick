const Bubble = require('../../../lib/class_define/bubble.js');
class StickDirection extends Bubble{
  constructor(options) {
    super();
    this.init(options);


    this._centerX = 0;
    this._centerY = 0;
  }

  init(options) {
    // 1/4 area at left and bottom of screen
    let { height, width } = options;

    this._centerX = height * 3 / 4;
    this._centerY = width * 1 / 4;

    this._innerRadius = width / 4;
    this._outterRadius = width / 8;

    this._innerRingWidth = width / 350 * 4;
    this._innerRingWidth = width / 350 * 8;
  }

  draw (ctx) {
    ctx.arc(this._centerX, this._centerY, this._outterRadius, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.arc(this._centerX, this._centerY, this._innerRadius, 0, 2 * Math.PI, true);
    ctx.stroke();
  }
}

module.exports = StickDirection;