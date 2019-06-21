const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function range(min, max){
	const diff = max - min
	const ran = Math.random() * diff
	return ran + min
}


function flicker({time, repeat, a, b }) {
	
	const speed = .01;
	const tl = new TimelineMax({repeat, repeatDelay:time})
	const tl_move = new TimelineMax({repeat, repeatDelay:time})
	tl.set([a, b], {opacity:0})
	tl.to( a, speed, {opacity:1})

	tl.add( 'out', `+=${time}`)
	tl.to( a, speed, {opacity:0}, 'out')
	tl.fromTo( b, speed, {opacity:0}, {opacity:1}, 'out')

	tl.add( 'out2', `+=${time}`)
	tl.to( b, speed, {opacity:0}, 'out2')
	tl.to( a, speed, {opacity:1}, "out2")


	tl_move.add("y")
	const ran = {
		speed: range(.1, .3),
		delay: range(.1, .3),
		y: `+=${range(-3, 3)}`,
		x: `+=${range(-3, 3)}`,

	}

	const obj = {
		y:"+=1", 
		x:"-=2", 
		scale:"+=.0", 
		yoyo:true, 
		repeat:3, 
		repeatDelay:ran.delay
	}

	tl_move.to( b, .05, {...obj}, 'y')
	tl_move.to( a, .05, {...obj}, "y")
	
}



export {size, flicker, range}