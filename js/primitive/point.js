class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(point) {
    return this.x === point.x && this.y === point.y;
  }

  #arc(radious) {
    ctx.arc(this.x, this.y, radious, 0, Math.PI * 2);
  }

  draw(
    ctx,
    { size = 18, color = "black", outline = false, fill = false } = {},
  ) {
    const rad = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    this.#arc(rad * 1);
    ctx.fill();

    if (outline) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "yellow";
      this.#arc(rad * 0.6);
      ctx.stroke();
    }

    if (fill) {
      ctx.beginPath();
      this.#arc(rad * 0.4);
      ctx.fillStyle = "yellow";
      ctx.fill();
    }
  }
}
