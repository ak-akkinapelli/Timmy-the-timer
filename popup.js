var el = document.getElementById('start')
if (el) {
	el.addEventListener('click', timer)
}
var audio = new Audio()
audio.src = 'audio/horn.mp3'
function timer() {
	let selectedTime = document.getElementById('time').value
	setTimeout(function () {
		audio.play()
		selectedTime = document.getElementById('time').value
		document.getElementById('label').textContent = selectedTime + ' min is up'
		document.getElementById('label').style.display = 'block'
		document.getElementById('start').textContent = 'restart'
	}, selectedTime * 60000)
}
