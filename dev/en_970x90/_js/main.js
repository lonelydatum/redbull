import {flicker, range, read} from '../../_common/js/common.js'


function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.add("do", `+=${read.txt}`)
	tl.to('.txt', .5, {y:"+=90"}, "do")
	tl.from('.cta', .5, {y:"-=90"}, "do")
	// tl.to('.frame1', .5, {x:-600}, "+=1")
	

	// tl.to('.frame1', .5, {x:-900}, "+=2")

	flicker({
		time: .2,
		repeat: 25,
		a: ".wave_a",
		b: ".wave_b",
	})

}

start()

module.exports = {};

