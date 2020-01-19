const Bubble = require('./bubble.js');

class Brush {
  constructor(ctx, bubble) {
    this._ctx = ctx;
    this._actionDict = null;
    this._actionArray = null;

    addAction(bubble);
  }

  draw() {
    let length = this._actionArray.length();

    for(let i = 0; i <= length; i ++) {
      let bubble = this._actionArray[i];
      bubble.draw(this._ctx);
    }
  }

  addAction(bubble) {
    if(!this._actionDict) {
      this._actionDict = {};
    }

    if(!this._actionArray) {
      this._actionArray = [];
    }

    if(bubble instanceof Array) {
      this.addAction(...bubble);
    }

    if(!(bubble instanceof Bubble)) {
      throw new Error('Error bubble input');
    }

    let actionName = bubble.name;
    let action = {
      name: actionName,
      index: this._actionDict.length,
      action: bubble
    }

    this._actionArray.push(action);

    if(this._actionDict[actionName]) {
      actions = this._actionDict[actionName];
      actions.push(action);
    }
  }

  insertActionByIndex(action, index) {
    // todo 插入
  }

  getActionsByName(name) {
    return this._actionDict[name];
  }
}

module.exports = Brush