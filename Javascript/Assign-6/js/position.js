function Position(width, height) {
	var x = null;
	var y = null;

	var width = width;
	var height = height;

	var that = this;

	this.generateXY = function() {
		this.x = Math.random() * height;
		this.y = Math.random() * width;
	};
}