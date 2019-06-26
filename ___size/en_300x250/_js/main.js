import {flicker, range, read} from '../../_common/js/common.js'


TweenLite.defaultEase = Power2.easeInOut
const tl = new TimelineMax()
tl.to('.frame1', .5, {x:-300}, "+=2")


tl.add('end', `+=${read.txt}`)
tl.to('.txt', .3, {opacity:0}, "end")
tl.from('.cta', .4, {opacity:0}, "+=.2")



flicker({
	time: .2,
	repeat: 25,
	a: ".wave_a",
	b: ".wave_b",
})

module.exports = {};

