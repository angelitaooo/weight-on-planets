var planets = [
	{
		planet: 'earth',
		gravity: 9.8
	},
	{
		planet:'mercury',
		gravity: 2.8
	},
	{
		planet: 'venus',  
		gravity: 8.9
	},
	{
		planet: 'mars' ,
		gravity: 3.7
	},
	{
		planet: 'jupiter',
		gravity: 22.9
	},
	{
		planet: 'saturn',
		gravity:  9.1
	},
	{
		planet: 'uranus',
		gravity: 7.8
	},
	{
		planet: 'neptune',
		gravity: 11
	},
	{
		planet: 'pluto',
		gravity: 0.6
	},
];


var userWeight;
var finalWeight;
var earthGravity = 9.8;

var calculateButton = document.getElementById('calculate');
calculate.addEventListener('click', calculateHandler);

function calculateHandler() { 
	userWeight = document.getElementById('weight').value;
	var result = planets.map(calculateWeight).join('');
	var ul = document.getElementById('planets');
	ul.innerHTML = result;
}

function calculateWeight(planet){
	var weight = userWeight * planet.gravity / earthGravity;
	var li = '<li class="list-group-item">' + planet.planet + ': ' + weight.toFixed(2) + '</li>'
	return li;
}
