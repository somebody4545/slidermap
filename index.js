// Slider crap


// Data that will be used
var data = [
	{
		type: "Person",
		image: "./icons/person.svg",
		start: 1254,
		end: 1324,
		name: 'Marco Polo', 
		description:
		"Person who sailed a long distance or something"
		,
		x: 50, 
		y: 50,
		percentsize: 5,

	}, 
	{
		type: "Pandemic",
		image: "./icons/virus.svg",
		start: 1346,
		end: 1353,
		name: 'The Black Death',
		description:
		"A pandemic that killed a lot of people",
		x: 40,
		y: 40,
		percentsize: 30,
	},
	

];







//Defining variables
var number = 0
var index = 0
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var title = document.getElementById("title");
var time = document.getElementById("time");
var type = document.getElementById("type");
var about = document.getElementById("about");
var firstColor = '#ffdd00'
var secondColor = '#fc0000' //#8031ff is the purple one
var noneColor = "#bdbdbd"
var key = document.getElementById("key");
var maxNumber = document.getElementById("maxnumber");
var noneKey = document.getElementById("nonekey");
var midNumber = document.getElementById("midnumber");
var minNumber = document.getElementById("minnumber");
var stateSize = 65755
var keyRound = -1
var populationElement = document.getElementById("population");
var map = document.getElementById("map");
var mapitems = document.getElementsByClassName("mapitem");
var abouttext = document.getElementById("abouttext");
var abouttextinner = abouttext.innerHTML;
var increment = 1;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// noneKey.style.background = noneColor

// key.style.backgroundImage = 'linear-gradient(to right, ' + firstColor + ', ' + secondColor + ')'
console.log('linear-gradient(to right, ' + firstColor + ', ' + secondColor + ')')
// Function I ripped off from internet for commas
function separator(numb) {
	var str = numb.toString().split(".");
	str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return str.join(".");
}

function getlength(number) {
	return number.toString().length;
}

// Another stolen function
getGradientColor = function (start_color, end_color, percent) {
	// strip the leading # if it's there
	start_color = start_color.replace(/^\s*#|\s*$/g, '');
	end_color = end_color.replace(/^\s*#|\s*$/g, '');

	// convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
	if (start_color.length == 3) {
		start_color = start_color.replace(/(.)/g, '$1$1');
	}

	if (end_color.length == 3) {
		end_color = end_color.replace(/(.)/g, '$1$1');
	}

	// get colors
	var start_red = parseInt(start_color.substr(0, 2), 16),
		start_green = parseInt(start_color.substr(2, 2), 16),
		start_blue = parseInt(start_color.substr(4, 2), 16);

	var end_red = parseInt(end_color.substr(0, 2), 16),
		end_green = parseInt(end_color.substr(2, 2), 16),
		end_blue = parseInt(end_color.substr(4, 2), 16);

	// calculate new color
	var diff_red = end_red - start_red;
	var diff_green = end_green - start_green;
	var diff_blue = end_blue - start_blue;

	diff_red = ((diff_red * percent) + start_red).toString(16).split('.')[0];
	diff_green = ((diff_green * percent) + start_green).toString(16).split('.')[0];
	diff_blue = ((diff_blue * percent) + start_blue).toString(16).split('.')[0];

	// ensure 2 digits by color
	if (diff_red.length == 1) diff_red = '0' + diff_red
	if (diff_green.length == 1) diff_green = '0' + diff_green
	if (diff_blue.length == 1) diff_blue = '0' + diff_blue

	return '#' + diff_red + diff_green + diff_blue;
};

// NOT stolen functiond
darken = function (color) {
	return getGradientColor(color, "#000000", 0.2)
}

// Current data is a placeholder (not really anymore)
slider.min = 300/increment
slider.max = 1500/increment


var dataLength = data.length;
for (var i = 0; i < dataLength; i++) {
	if (data[i]['population'] != undefined) {
		data[i]['density'] = Math.round(data[i]['population'] / stateSize * 100) / 100
		var minPopulation = data[i]['density'];

	}
}

var maxPopulation = 0
for (var i = 0; i < dataLength; i++) {
	if (data[i]['density'] > maxPopulation) {
		maxPopulation = data[i]['density']
	}
}


round = (10 ** keyRound)
// maxNumber.innerHTML = "≈" + separator(Math.round(maxPopulation / round) * round)
// midNumber.innerHTML = "≈" + separator((Math.round(maxPopulation / round) * round) / 2)
// // ugly code
function update() {
	mapitems = document.getElementsByClassName("mapitem");
	console.log(mapitems);
	number = Math.round(number)
	numberConverted = number * increment
	index = number - slider.min
	output.innerHTML = numberConverted
	map.innerHTML =
	'<img src="world.svg"></img>'
	// for each item in data, console log its info when its range shows up in slider
	//also, align image to center of
	for (var i = 0; i < dataLength; i++) {
		if (data[i]['start'] <= numberConverted && data[i]['end'] >= numberConverted) {
			// place image inside with icon, set alt to name
			map.innerHTML += 
			'<img class="mapitem" src="' + data[i]['image'] + '" style="position:absolute; top: ' + data[i]['y'] + '%; left: ' + data[i]['x'] + '%; width: '+ data[i]['percentsize'] +'%; height: '+ data[i]['percentsize'] + '%; z-index: 1000; cursor: pointer;" alt="' + data[i]['name'] + '"></img>'
			console.log(data[i]['name'] + " was alive between " + data[i]['start'] + " and " + data[i]['end'] + ". " + data[i]['description'])
		}

	}
	// if user clicked over a mapitem, show its info using title, time, type, and about
	for (var i = 0; i < mapitems.length; i++) {
		mapitems[i].onclick = function () {
			for (var i = 0; i < dataLength; i++) {
				if (data[i]['name'] == this.alt) {
					title.innerHTML = data[i]['name']
					time.innerHTML = data[i]['start'] + " - " + data[i]['end']
					type.innerHTML = data[i]['type']
					about.innerHTML = data[i]['description']
					abouttext.innerHTML = "About"
				}
			}
		}
	}
	// if the item whos description is being shown is not in the range, hide the description
	for (var i = 0; i < dataLength; i++) {
		if (data[i]['name'] == title.innerHTML) {
			if (data[i]['start'] > numberConverted || data[i]['end'] < numberConverted) {
				title.innerHTML = ""
				time.innerHTML = ""
				type.innerHTML = ""
				about.innerHTML = ""
				abouttext.innerHTML = abouttextinner
			}
		}
	}
}
var bar = 'linear-gradient(to right'
for (let i = 0; i < data.length; i++) {
	if (data[i]['density'] != undefined) { data[i]['fill'] = getGradientColor(firstColor, secondColor, data[i]['density'] / maxPopulation) } else { data[i]['fill'] = noneColor }
	for (let x = 0; x < 1; x++) {
		if (data[i]['fill'] === undefined) {
			bar += ', #aaaaaa'
		} else {
			bar += ', ' + data[i]['fill']
		}
	}
}
bar += ')'
console.log(bar)
slider.style.backgroundImage = bar


// Making it display right
number = slider.value;
update()

// Update slider and variables
slider.oninput = function () {
	number = this.value;
	update()

}

// Snap back to reality
slider.onchange = function () {
	slider.value = (number)
}


// Arrow key slider magic
document.onkeydown = function (event) {
	switch (event.keyCode) {
		case 37:
			slider.value = slider.value - 1
			number = slider.value;
			update()
			break;
		case 39:
			slider.value = number + 1
			number = slider.value;
			update()
			break;
	}
};

onload = function () {
	update()
}

// Ok so we have to do some DOM in HTML stuff I honestly don't know
// Then once we get the data we can make the bar colorful and also make the image change color
// And then we're done!1!!1!!!1
