import {flicker, range} from '../../_common/js/common.js'


TweenLite.defaultEase = Power3.easeInOut
const tl = new TimelineMax()
tl.to('.frame1', .5, {x:-300}, "+=2")
tl.to('.frame1', .5, {x:-600}, "+=1")
// tl.from('.bar_cta', .7, {y:"+=80"}, "+=.3")

tl.to('.frame1', .5, {x:-900}, "+=2")

flicker({
	time: .2,
	repeat: 25,
	a: ".wave_a",
	b: ".wave_b",
})

module.exports = {};

