import {flicker, range} from '../../_common/js/common.js'





function start(){
	const tl = new TimelineMax()
	TweenMax.set(".txt2", {opacity:0})
	tl.set(".frame1", {opacity:1})
	tl.to(".logo", .3, {opacity:0}, "+=1.3")
	tl.set(".frame2", {opacity:1})

	tl.add('mask', "+=.2")
	tl.from(".txt", .5, {opacity:0}, 'mask')

	tl.from('.top_1', 1, {opacity:0, clip:`rect(100px 300px 100px 0px)`, ease:Power2.easeInOut}, 'mask')
	tl.from('.top.dots', 1.3, {opacity:0, clip:`rect(100px 300px 100px 0px)`, ease:Power2.easeInOut}, 'mask')
	
	// tl.from('.right_1', 1.5, {clip:`rect(0px 150px 600px 150px)`, ease:Power2.easeOut}, 'mask')
	tl.from('.right_a', 1.3, {clip:`rect(0px 150px 600px 150px)`, ease:Power3.easeInOut}, 'mask')
	tl.from('.right_b', 1.5, {clip:`rect(0px 150px 600px 150px)`, ease:Back.easeOut}, 'mask')
	tl.from('.right_colour', 1, {clip:`rect(0px 150px 600px 150px)`, ease:Power2.easeInOut}, 'mask+=.5')

	

	tl.from('.left_1', 1.4, {clip:`rect(0px 150px 600px 150px)`, ease:Back.easeOut}, 'mask')
	tl.from('.left_1_tri', 1, {clip:`rect(0px 150px 600px 150px)`, ease:Back.easeOut}, 'mask')
	tl.from('.dials', 1.2, {clip:`rect(0px 150px 600px 150px)`, ease:Back.easeOut}, 'mask')
	
	tl.from('.left_2', .9, {clip:`rect(0px 150px 600px 150px)`, ease:Power2.easeInOut}, 'mask')
	tl.from('.left_3', 1.2, {clip:`rect(0px 150px 600px 150px)`, ease:Power3.easeOut}, 'mask')
	tl.from('.left_4', 1.3, {clip:`rect(0px 150px 600px 150px)`, ease:Power4.easeInOut}, 'mask')

	// tl.to(".can", .2, {scale:.82, yoyo:true, repeat:1, ease:Back.easeOut}, 'mask-=.5')
	tl.add("f3")
	tl.set(['.hasColor'], {opacity:0})
	tl.call(frame3)
	tl.to(".txt", .3, {opacity:0}, 8)
	tl.to(".txt2", .3, {opacity:1})

	// tl.gotoAndPlay("f3")

	// tl.to(".txt", .5, {opacity:0}, '+=2')
	// TweenMax.to(".can", .3, {scale:.9, yoyo:true, repeat:1, ease:Power4.easeOut})

	// tl.to(".can", .3, {scale:.82, yoyo:true, repeat:1, ease:Power4.easeOut})


}

start()

function frame3(){
	
	TweenMax.set(".frame3", {opacity:1})
	// TweenMax.from(".txt2", .3, {opacity:0})
	

	flicker({
		time: .2,
		repeat: 25,
		a: ".dots_a",
		b: ".dots_b",
	})

	flicker({
		time: .5,
		repeat: 10,
		a: ".tri_a",
		b: ".tri_b",
	})


	flicker({
		time: .4,
		repeat: 12,
		a: ".vert_a",
		b: ".vert_b",
	})

	flicker({
		time: .3,
		repeat: 17,
		a: ".hor_a",
		b: ".hor_b",
	})

	flicker({
		time: .4,
		repeat: 12,
		a: ".stuff_a",
		b: ".stuff_b",
	})

}



module.exports = {};

