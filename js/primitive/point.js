class Point {
	constructor (x, y) {
		this.x = x
		this.y = y
	}

	// check if random point does exits
	equals (point) {
		return this.x === point.x && this.y === point.y
	}

	// size in pixels
	draw (ctx, size = 18, color = "black") {
		const rad = size / 2
		ctx.beginPath()
		ctx.fillStyle = color
		// initial points, radious, full cirle (0 deg, cirlce PI)
		// Math.PI * 2 = 360°
		ctx.arc(this.x, this.y, rad, 0, Math.PI * 2)
		ctx.fill()
	}
}