(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function range(min, max) {
	var diff = max - min;
	var ran = Math.random() * diff;
	return ran + min;
}

function flicker(_ref) {
	var time = _ref.time;
	var repeat = _ref.repeat;
	var a = _ref.a;
	var b = _ref.b;

	var speed = .01;
	var tl = new TimelineMax({ repeat: repeat, repeatDelay: time });
	var tl_move = new TimelineMax({ repeat: repeat, repeatDelay: time });
	tl.set([a, b], { opacity: 0 });
	tl.to(a, speed, { opacity: 1 });

	tl.add('out', '+=' + time);
	tl.to(a, speed, { opacity: 0 }, 'out');
	tl.fromTo(b, speed, { opacity: 0 }, { opacity: 1 }, 'out');

	tl.add('out2', '+=' + time);
	tl.to(b, speed, { opacity: 0 }, 'out2');
	tl.to(a, speed, { opacity: 1 }, "out2");

	tl_move.add("y");
	var ran = {
		speed: range(.1, .3),
		delay: range(.1, .3),
		y: '+=' + range(-3, 3),
		x: '+=' + range(-3, 3)

	};

	var obj = {
		y: "+=1",
		x: "-=2",
		scale: "+=.0",
		yoyo: true,
		repeat: 3,
		repeatDelay: ran.delay
	};

	tl_move.to(b, .05, _extends({}, obj), 'y');
	tl_move.to(a, .05, _extends({}, obj), "y");

	setTimeout(function () {
		void 0;
		tl.pause();
		tl_move.pause();
	}, 11000);
}

var read = {
	txt: 4
};

exports.size = size;
exports.flicker = flicker;
exports.range = range;
exports.read = read;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax();
	tl.add("do", '+=' + _commonJsCommonJs.read.txt);
	tl.to('.txt', .5, { y: "+=250" }, "do");
	tl.from('.cta', .5, { y: "-=250" }, "do");
	// tl.to('.frame1', .5, {x:-600}, "+=1")

	// tl.to('.frame1', .5, {x:-900}, "+=2")

	(0, _commonJsCommonJs.flicker)({
		time: .2,
		repeat: 25,
		a: ".wave_a",
		b: ".wave_b"
	});
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
