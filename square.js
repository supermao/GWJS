(function (window) {
	"use strict";

	function Square(x, y) {
		this.initialize(x, y);
	}

	var p = Square.prototype = new Enemy();

	p.Enemy_initialize = p.initialize;

	p.initialize = function(x, y) {
		this.Enemy_initialize(x, y, 20, 150);
		this.rotatesToTarget = false;
		this.makeAnimations();
	}

	p.makeShape = function () {
		var g = this.graphics;
		g.clear();

		var size = Math.sqrt(this.radius * this.radius / 2) * 2;
		g.setStrokeStyle(2, "round").beginStroke("cyan").drawRect(-size/2, -size/2, size, size);
	}

	p.makeAnimations = function () {
		createjs.Tween.get(this,{loop:true}).to({rotation:360}, 3000);
	}

	window.Square = Square;
}(window))
