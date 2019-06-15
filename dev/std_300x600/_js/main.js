

function flicker({time, repeat, a, b }) {
	
	const speed = .01;
	const tl = new TimelineMax({repeat, repeatDelay:time})
	tl.set([a, b], {opacity:0})
	tl.to( a, speed, {opacity:1})

	tl.add( 'out', `+=${time}`)
	tl.to( a, speed, {opacity:0}, 'out')
	tl.fromTo( b, speed, {opacity:0}, {opacity:1}, 'out')

	tl.add( 'out2', `+=${time}`)
	tl.to( b, speed, {opacity:0}, 'out2')
	tl.to( a, speed, {opacity:1}, "out2")


}

function start(){
	const tl = new TimelineMax({onComplete: frame3})
	tl.set(".frame1", {opacity:1})
	tl.to(".logo", .3, {opacity:0}, "+=2")
	tl.set(".frame2", {opacity:1})

	tl.add('mask', "+=.2")
	tl.from(".txt", .5, {opacity:0}, 'mask')
	tl.from('.top', .6, {opacity:0, clip:`rect(100px 300px 100px 0px)`, ease:Back.easeOut}, 'mask')
	tl.from('.right', .5, {clip:`rect(0px 150px 600px 150px)`, ease:Back.easeOut}, 'mask')
	tl.from('.left', .7, {clip:`rect(0px 150px 600px 150px)`, ease:Back.easeOut}, 'mask')

	tl.to(".can", .3, {scale:.82, yoyo:true, repeat:1, ease:Back.easeOut}, 'mask-=.5')


	tl.to(".txt", .5, {opacity:0}, '+=2')
	// TweenMax.to(".can", .3, {scale:.9, yoyo:true, repeat:1, ease:Power4.easeOut})

	tl.to(".can", .3, {scale:.82, yoyo:true, repeat:1, ease:Power4.easeOut})


}

start()

function frame3(){
	// return
	TweenMax.set(".frame3", {opacity:1})
	TweenMax.from(".txt2", .3, {opacity:0})

	

	flicker({
		time: .2,
		repeat: 10,
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
		repeat: 10,
		a: ".vert_a",
		b: ".vert_b",
	})

	flicker({
		time: .3,
		repeat: 10,
		a: ".hor_a",
		b: ".hor_b",
	})

	flicker({
		time: .4,
		repeat: 10,
		a: ".stuff_a",
		b: ".stuff_b",
	})

}



module.exports = {};

