(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function flicker(_ref) {
	var time = _ref.time;
	var repeat = _ref.repeat;
	var a = _ref.a;
	var b = _ref.b;

	var speed = .01;
	var tl = new TimelineMax({ repeat: repeat, repeatDelay: time });
	tl.set([a, b], { opacity: 0 });
	tl.to(a, speed, { opacity: 1 });

	tl.add('out', '+=' + time);
	tl.to(a, speed, { opacity: 0 }, 'out');
	tl.fromTo(b, speed, { opacity: 0 }, { opacity: 1 }, 'out');

	tl.add('out2', '+=' + time);
	tl.to(b, speed, { opacity: 0 }, 'out2');
	tl.to(a, speed, { opacity: 1 }, "out2");
}

function start() {
	var tl = new TimelineMax({ onComplete: frame3 });
	tl.set(".frame1", { opacity: 1 });
	tl.to(".logo", .3, { opacity: 0 }, "+=2");
	tl.set(".frame2", { opacity: 1 });

	tl.add('mask', "+=.2");
	tl.from(".txt", .5, { opacity: 0 }, 'mask');

	tl.from('.top_1', 1, { opacity: 0, clip: 'rect(100px 300px 100px 0px)', ease: Power2.easeInOut }, 'mask');

	tl.from('.right_1', 1.5, { clip: 'rect(0px 150px 600px 150px)', ease: Power2.easeOut }, 'mask');
	tl.from('.right_2', 1.3, { clip: 'rect(0px 150px 600px 150px)', ease: Power3.easeInOut }, 'mask');
	tl.from('.right_3', 1.5, { clip: 'rect(0px 150px 600px 150px)', ease: Back.easeOut }, 'mask');
	tl.from('.right_4', 2.1, { clip: 'rect(0px 150px 600px 150px)', ease: Power4.easeInOut }, 'mask');

	// tl.from('.right', .5, {clip:`rect(0px 150px 600px 150px)`, ease:Back.easeOut}, 'mask')

	tl.from('.left_1', 1.4, { clip: 'rect(0px 150px 600px 150px)', ease: Back.easeOut }, 'mask');
	tl.from('.left_2', .9, { clip: 'rect(0px 150px 600px 150px)', ease: Power2.easeInOut }, 'mask');
	tl.from('.left_3', 1.2, { clip: 'rect(0px 150px 600px 150px)', ease: Power3.easeOut }, 'mask');
	tl.from('.left_4', 1.3, { clip: 'rect(0px 150px 600px 150px)', ease: Power4.easeInOut }, 'mask');

	tl.to(".can", .3, { scale: .82, yoyo: true, repeat: 1, ease: Back.easeOut }, 'mask-=.5');

	tl.to(".txt", .5, { opacity: 0 }, '+=2');
	// TweenMax.to(".can", .3, {scale:.9, yoyo:true, repeat:1, ease:Power4.easeOut})

	tl.to(".can", .3, { scale: .82, yoyo: true, repeat: 1, ease: Power4.easeOut });
}

start();

function frame3() {
	// return
	TweenMax.set(".frame3", { opacity: 1 });
	TweenMax.from(".txt2", .3, { opacity: 0 });

	flicker({
		time: .2,
		repeat: 10,
		a: ".dots_a",
		b: ".dots_b"
	});

	flicker({
		time: .5,
		repeat: 10,
		a: ".tri_a",
		b: ".tri_b"
	});

	flicker({
		time: .4,
		repeat: 10,
		a: ".vert_a",
		b: ".vert_b"
	});

	flicker({
		time: .3,
		repeat: 10,
		a: ".hor_a",
		b: ".hor_b"
	});

	flicker({
		time: .4,
		repeat: 10,
		a: ".stuff_a",
		b: ".stuff_b"
	});
}

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
