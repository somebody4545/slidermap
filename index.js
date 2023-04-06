// Slider crap


var data = [
	{
		type: "Nature",
		svg: "monsoon",
		name: "Monsoon Winds",
		description:
			"Monsoon winds in the Indian Ocean made travelling by boat easier",
		x: 0,
		y: 0,
		percentsize: 100,
	},
	{
		type: "Place",
		svg: "place",
		start: 365,
		name: 'Swahili Coast',
		description:
			"Swahili was group of city-states that ranged from Sofla to Mogadishu, which is modern day Mozambique and Somalia. Swahili dominated the east coast, and by the 10th century, Swahili society attracted many of the Muslim merchants. However, they rarely had control of places outside the city. Most goods came from the interior and the cities were independent. The Swahili coast was very involved in the Indian-Ocean Trade, allowing there to be cultural exchange through food, dress, architecture, religion, language, and much more through trade.",
		x: 33,
		y: 60,
		percentsize: 4,
	},
	{
		type: "Place",
		svg: "place",
		start: 1100,
		name: "Zimbabwe",
		description:
		"Much like other cities, Great Zimbabwe",
		x: 26,
		y: 65,
		percentsize: 4,
	},
];


var svgs = {
	"person": `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
		width="100%" height="100%" viewBox="0 0 579.698 579.698"
		xml:space="preserve">
		<g>
		<g>
		   <path d="M63.671,428.914v113.088c0,20.836,16.86,37.696,37.696,37.696h376.964c20.836,0,37.696-16.86,37.696-37.696V428.914
			   c0-62.47-50.578-113.089-113.088-113.089h-9.667c-5.07,0-9.134,4.122-9.62,9.168c-4.611,47.751-44.845,85.074-93.805,85.074
			   s-89.193-37.323-93.801-85.074c-0.486-5.046-4.55-9.168-9.621-9.168h-9.667C114.323,315.825,63.671,366.444,63.671,428.914z"/>
		   <path d="M289.848,309.938c74.875,0,135.598-69.389,135.598-154.971S364.723,0,289.848,0S154.25,69.388,154.25,154.971
			   C154.25,240.553,214.973,309.938,289.848,309.938z M289.848,154.971c35.377,0,64.888-17.895,74.192-42.222
			   c13.924,16.778,22.663,38.06,22.663,61.595c0,53.498-43.397,96.855-96.855,96.855c-53.498,0-96.855-43.357-96.855-96.855
			   C192.993,150.809,254.471,154.971,289.848,154.971z"/>
		</g>
		</g>
		</svg>`,
	"virus": `<svg width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
		viewBox="0 0 32.738 32.738" xml:space="preserve">
   <g>
	   <path style="fill:#010002;" d="M31.917,17.595c-0.911-0.691-2.213-0.519-2.91,0.396c-0.066,0.093-0.12,0.19-0.174,0.285
		   l-5.095-0.863c0.048-0.353,0.08-0.709,0.08-1.075c0-1.481-0.412-2.863-1.118-4.053l3.248-2.101c0.207,0.14,0.46,0.216,0.728,0.191
		   c0.618-0.057,1.072-0.599,1.018-1.221c-0.056-0.618-0.603-1.071-1.221-1.016s-1.071,0.603-1.017,1.221
		   c0.005,0.062,0.021,0.117,0.033,0.178l-3.227,2.083c-0.644-0.87-1.454-1.604-2.393-2.151l2.318-3.662
		   c0.247,0.04,0.509,0.003,0.742-0.132c0.536-0.312,0.722-0.996,0.409-1.532c-0.311-0.539-0.997-0.725-1.534-0.413
		   c-0.536,0.311-0.721,0.997-0.41,1.536c0.03,0.053,0.064,0.099,0.104,0.146l-2.335,3.687c-0.79-0.361-1.645-0.604-2.547-0.689
		   l0.474-2.8c0.182-0.044,0.35-0.135,0.47-0.291c0.274-0.364,0.207-0.881-0.156-1.155c-0.363-0.278-0.881-0.207-1.157,0.155
		   c-0.274,0.362-0.205,0.881,0.156,1.156c0.035,0.023,0.076,0.032,0.112,0.055l-0.484,2.853c-0.061-0.002-0.119-0.009-0.179-0.009
		   c-1.034,0-2.019,0.202-2.922,0.562L10.695,4.83c0.217-0.275,0.35-0.619,0.344-0.997c-0.014-0.873-0.729-1.57-1.602-1.552
		   C8.567,2.295,7.873,3.01,7.886,3.882c0.013,0.87,0.729,1.562,1.601,1.55c0.087-0.002,0.17-0.017,0.253-0.03l2.184,4.012
		   c-1.092,0.617-2.024,1.488-2.715,2.53l-3.263-2.56c0.065-0.239,0.053-0.503-0.055-0.749C5.636,8.07,4.973,7.817,4.407,8.072
		   c-0.568,0.254-0.82,0.919-0.566,1.486c0.257,0.564,0.921,0.816,1.487,0.562c0.055-0.026,0.105-0.06,0.155-0.092l3.316,2.607
		   c-0.49,0.937-0.8,1.982-0.884,3.096L3.02,15.722c-0.137-0.322-0.376-0.605-0.709-0.779c-0.771-0.407-1.727-0.113-2.13,0.659
		   c-0.405,0.771-0.109,1.725,0.659,2.129c0.771,0.408,1.726,0.11,2.132-0.661c0.041-0.075,0.067-0.153,0.095-0.234l4.845,0.012
		   c0.04,0.631,0.146,1.247,0.325,1.833l-3.131,1.206c-0.173-0.179-0.407-0.303-0.675-0.335c-0.616-0.07-1.171,0.372-1.242,0.986
		   c-0.071,0.616,0.37,1.178,0.988,1.246c0.615,0.069,1.171-0.374,1.241-0.989c0.006-0.061,0.005-0.117,0.004-0.182l3.084-1.188
		   c0.611,1.449,1.641,2.683,2.937,3.542l-1.512,1.561c-0.233-0.089-0.497-0.106-0.752-0.022c-0.592,0.197-0.909,0.831-0.716,1.417
		   c0.193,0.59,0.83,0.913,1.418,0.722c0.59-0.198,0.908-0.833,0.717-1.424c-0.021-0.058-0.045-0.11-0.072-0.167l1.619-1.67
		   c0.771,0.407,1.617,0.687,2.512,0.819l-0.431,4.041c-0.244,0.056-0.473,0.192-0.639,0.401c-0.38,0.491-0.292,1.193,0.2,1.577
		   c0.492,0.381,1.197,0.289,1.578-0.201c0.379-0.492,0.288-1.195-0.203-1.578c-0.048-0.033-0.099-0.062-0.149-0.093l0.433-4.068
		   c0.136,0.009,0.27,0.021,0.408,0.021c1.035,0,2.021-0.203,2.93-0.562l0.804,3.58c-0.201,0.146-0.36,0.354-0.431,0.615
		   c-0.16,0.6,0.193,1.215,0.794,1.376c0.599,0.157,1.216-0.193,1.376-0.795c0.16-0.601-0.196-1.215-0.796-1.376
		   c-0.059-0.016-0.117-0.022-0.178-0.029l-0.832-3.706c0.579-0.301,1.111-0.671,1.597-1.103l1.102,1.552
		   c-0.099,0.156-0.15,0.338-0.125,0.537c0.061,0.448,0.477,0.766,0.929,0.708c0.453-0.063,0.768-0.479,0.708-0.93
		   c-0.062-0.453-0.479-0.768-0.931-0.707c-0.042,0.006-0.075,0.028-0.115,0.04l-1.137-1.602c0.838-0.854,1.479-1.896,1.864-3.062
		   l5.241,0.891c0.108,0.451,0.356,0.869,0.751,1.168c0.913,0.693,2.216,0.52,2.911-0.395C33.008,19.592,32.83,18.29,31.917,17.595z
			M13.377,15.969c-0.655,0-1.19-0.534-1.19-1.194c0-0.657,0.535-1.188,1.19-1.188c0.658,0,1.192,0.53,1.192,1.188
		   C14.569,15.434,14.036,15.969,13.377,15.969z M16.448,18.557c-0.482,0-0.874-0.392-0.874-0.873c0-0.486,0.392-0.875,0.874-0.875
		   c0.483,0,0.875,0.388,0.875,0.875C17.322,18.168,16.931,18.557,16.448,18.557z M19.694,14.854c-0.712,0-1.289-0.577-1.289-1.287
		   c0-0.715,0.577-1.293,1.289-1.293s1.29,0.578,1.29,1.293C20.984,14.277,20.407,14.854,19.694,14.854z"/>
   </g>
   </svg>`,
	"monsoon": `<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%"><defs><style>.cls-1{fill:#ef3d3b;}.cls-2{stroke:#ef3d3b;}.cls-2,.cls-3{fill:none;stroke-miterlimit:10;stroke-width:4px;}.cls-3{stroke:#0011d4;}.cls-4{fill:#0011d4;}</style></defs><g><line class="cls-3" x1="400.95" y1="330.94" x2="434" y2="235.33"/><polygon class="cls-4" points="405.97 329.57 396.67 343.33 397.84 326.76 405.97 329.57"/></g><g><line class="cls-3" x1="436.62" y1="328.67" x2="466" y2="262"/><polygon class="cls-4" points="441.74 327.72 431.33 340.67 433.87 324.25 441.74 327.72"/></g><g><line class="cls-3" x1="504.03" y1="325.09" x2="540" y2="231.33"/><polygon class="cls-4" points="509.09 323.89 499.33 337.33 501.07 320.81 509.09 323.89"/></g><g><line class="cls-2" x1="409.6" y1="212.46" x2="358.67" y2="317.33"/><polygon class="cls-1" points="404.46 213.22 415.33 200.67 412.19 216.98 404.46 213.22"/></g><g><line class="cls-2" x1="453.69" y1="258.16" x2="408" y2="341.33"/><polygon class="cls-1" points="448.51 258.66 460 246.67 456.04 262.8 448.51 258.66"/></g><g><line class="cls-2" x1="554.71" y1="241.17" x2="524.67" y2="336"/><polygon class="cls-1" points="549.72 242.66 558.67 228.67 557.92 245.26 549.72 242.66"/></g></svg>`,
	"place": `<svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z" fill="#000000"/>
	<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z" fill="#000000"/>
	</svg>`,
}




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
function getlength(number) {
	return number.toString().length;
}


// Current data is a placeholder (not really anymore)
slider.min = 300 / increment
slider.max = 1500 / increment
var dataLength = data.length;


round = (10 ** keyRound)

function update() {
	number = Math.round(number)
	numberConverted = number * increment
	index = number - slider.min
	output.innerHTML = numberConverted
	map.innerHTML =
		'<img src="world.svg"></img>'
	for (var i = 0; i < dataLength; i++) {
		if ((data[i]['start'] <= numberConverted && data[i]['end'] >= numberConverted) || data[i]['start'] == null) {
			map.innerHTML +=
				'<div class="mapitem" style="position:absolute; top: ' + data[i]['y'] + '%; left: ' + data[i]['x'] + '%; width: ' + data[i]['percentsize'] + '%; height: auto; z-index: 1000;" id="' + data[i]['name'] + '">' + svgs[data[i]['svg']] + '</div>'
		} else if (data[i]['start'] <= numberConverted && data[i]['end'] == null) {
			map.innerHTML +=
				'<div class="mapitem" style="position:absolute; top: ' + data[i]['y'] + '%; left: ' + data[i]['x'] + '%; width: ' + data[i]['percentsize'] + '%; height: auto; z-index: 1000;" id="' + data[i]['name'] + '">' + svgs[data[i]['svg']] + '</div>'
		}

	}
	mapitems = document.getElementsByClassName("mapitem"); 
	for (var i = 0; i < mapitems.length; i++) {
		mapitemsvgs = mapitems[i].getElementsByTagName("svg");
		mapitems[i].style.pointerEvents = "none";

		gtags = mapitemsvgs[0].getElementsByTagName("*");
		for (var e = 0; e < gtags.length; e++) {
			for (var p = 0; p < data.length; p++) {
				// mapitemsvgs[e].getElementsByTagName("g")[0].style.cursor = "pointer"
				// mapitemsvgs[e].getElementsByTagName("g")[0].addEventListener("click", function () {
				if (mapitems[i].id == data[p]['name']) {
					gtags[e].style.cursor = "pointer";
					gtags[e].style.pointerEvents = "auto";
					gtags[e].data = data[p];
					gtags[e].addEventListener("click", function () {
							title.innerHTML = this.data['name']
							if (this.data['start'] == null) {
								time.innerHTML = "Continuous"
							}
							else if (this.data['end'] != null) {
								time.innerHTML = '('+ this.data['start'] + "CE - " + this.data['end'] + "CE)"
							} else {
								time.innerHTML = "From "+this.data['start']
							}
							type.innerHTML = this.data['type']
							about.innerHTML = this.data['description']
							abouttext.innerHTML = ""
					})
				}
			}
			// )
		}
	}
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
