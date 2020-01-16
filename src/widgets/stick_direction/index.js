class StickDirection {
  constructor(option) {

  }

  initSteps() {
    let ctx = getContext()
    let steps = [];
    
    steps.push(() => {
      ctx.arc(100, 100, 50, 0, 2 * Math.PI, true);
    })

    steps.push(() => {
      ctx.arc(100, 100, 25, 0, 2 * Math.PI, true);
    })
    this._steps = steps;
  }

  draw () {
    let steps = this._steps;
    steps.forEach(step => step());
    let ctx = getContext();
    ctx.fill();
  }
}

module.exports = StickDirection;