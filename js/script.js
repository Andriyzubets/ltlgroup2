var sort = new Array();

document.querySelector('#first').onchange = function() {
	with (this)
	sort.push(options [selectedIndex].value);
}
document.querySelector('#second').onchange = function() {
	with (this)
	sort.push(options [selectedIndex].value);
}
document.querySelector('#fff').onclick = function() {
	document.getElementById('fff').setAttribute('data-filter', sort)
}
