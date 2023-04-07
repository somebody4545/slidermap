// Slider crap


var data = [
	{
		type: "Routes",
		svg: "traderoutes",
		name: "Indian Ocean Trade Routes", 
		start: 600, 
		end: 1450,
		description:
			"All the common trade routes across the Indian Ocean during the Post-Classical time period",
		x: 0,
		y: 0,
		percentsize: 100,
	},
	{
		type: "Natural Phenomenon",
		svg: "monsoon",
		name: "Monsoon Winds",
		description:
			"Monsoon winds in the Indian Ocean made traveling by boat easier. They go Northeast for half of the year, and Southwest for the other. This means that for most of the journey, ships don't have to deal with inconsistent wind.",
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
			"Swahili means \"coasters\" and they lived on the east coast of Africa. The Swahili coast was very involved in the Indian-Ocean Trade, allowing there to be cultural exchange through food, dress, architecture, religion, language, and much more. By the 10th Century, trade had made the Swahili cities very rich, and they ranged from Sofla to Mogadishu, which is modern day Mozambique and Somalia. These cities were independent from each other.",
		x: 32,
		y: 62,
		percentsize: 4,
	},
	{
		type: "Place",
		svg: "place",
		start: 500,
		name: "Zimbabwe",
		description:
		"Zimbabwe was in the African Interior. It’s name means “dwelling of a chief”. Zimbabwe was a city that controlled the flow of gold, ivory and slaves. These materials were sent to the coast and then sold to places like India, Southeast Asia, and China. It also taxed trade between the interior and costal regions of Africa which allowed it to gain a lot of wealth.",
		x: 26,
		y: 65,
		percentsize: 4,
	},
	{
		type: "Place",
		svg: "place",
		start: 957,
		name: "Kilwa Kisiwani",
		description:
		"Kilwa was one of the most important city states on the Swahili coast. They had a mixture of many cultures because of all the merchants coming to trade. They traded and exported many materials to numerous places, such as China and India. They traded gold, coconuts, copper iron, ivory, and much more from the interior, and imported cloth, porcelain, silk, cotton and jewels. Not long after, they grew very rich from all the taxes and trading through the Indian Ocean Trade routes. They reached their height between 1100-1500 CE, and by the late 1500, they were exporting around a ton of gold per year.",
		x: 33,
		y: 60,
		percentsize: 4,
	},
	{
		type: "Place",
		svg: "place",
		start: 1400,
		name: "Malacca",
		description:
		"Malacca was a city on the Strait of Malacca. The Strait of Malacca was the easiest way to sail to the South China Sea. This means that Malacca was very important in trade as it connected the Indian Ocean to the South China Sea. Sailors all over the Indian Ocean and China came here to trade spices.",
		x: 75,
		y: 44,
		percentsize: 4,
	},
	{
		type: "Goods",
		svg: "goods",
		name: "Coir",
		description:
		"Coir is a type of very strong rope that is made from the fibers of coconut palm. It is extracted from the husk of the coconut, which must be separated from the fruit via retting, which is burying it in the earth to rot. Next, it is beaten to separate the fibers, then washed and dried. Coir has many uses, but it is seen as very important mostly because of its strength for making ropes and the resistance of rotting in water. The ropes’ thickness ranges from being as thick as a finger to as thick as a person’s arm. Because of this, it can be used to carry very heavy weights. It will also be used for fishnets, as it doesn’t rot in water. Additionally, coir was very beneficial for navigating the Indian Ocean. It helped lift the sails needed for navigating and moving the ship, and were used in place of nails to hold the planks on the ship together. This was very important to the Indian Ocean trade, as coir didn’t rust in the ocean like nails, allowing for more flexibility throughout stormy and shallow waters.",
		x: 58,
		y: 34,
		percentsize: 4,
	},
	{
		type: "Place",
		svg: "place",
		start: 700,
		name: "Calicut (Kozhikode)",
		description:
			"Calicut was one of the most important trading ports in India. It was the world's number one source of pepper. It was also known for \"calico\" cloth which is what made its English name.",
		x: 57.5,
		y: 37,
		percentsize: 4,
	},
	{
		type: "Invention",
		svg: "invention",
		name: "Chinese Junk",
		description:
		"The junk is a type of ship that was invented in 200 BCE and perfected in the Song Dynasty. It was used for exploration, trade, war, and patrol. They were strong and heavy and usually very large.",
		x: 85,
		y: 25,
		percentsize: 4,
	},
	{
		type: "Invention",
		svg: "invention",
		name: "Arab Dhow",
		description:
		"The Dhow has a triangluar sail and is held together by coir, rope from southern India. This way, they would not break easily in shallow water. They were used all over the Indian Ocean and were used by Indian, Muslim, and African traders.",
		x: 45,
		y: 25,
		percentsize: 4,
	},
	{
		type: "Invention",
		svg: "invention",
		name: "Wootz Steel",
		description:
		"Iron is a very hard metal, but it has some downsides. For one, it is very brittle or easily broken. Iron is similar to other metals, such as gold, silver, tin, and copper for its need for extreme heat. This required technology for making longer and hotter fires, which caused a lot of experimentation, eventually leading to the invention of steel. To make steel, people had to develop a special way of creating iron. They had to add certain pieces to the recipe, resulting in a more heated iron that’s fused with carbon particles. They then produced and exported blocks of steel to places like Persia and Damascus, which was then turned into blades. The steel was so fine and amazing that many people in the 12th century commented on the steel being impossible to surpass in terms of its sharpness and edge. ",
		x: 58,
		y: 30,
		percentsize: 4,
	},
	{
		type: "Disease",
		svg: "virus",
		name: "Bubonic Plague",
		start: 1330,
		description:
		"The Bubonic Plague, also known as the “Black Death” was an epidemic that originated in east-central Asia, sometime around the 1330s. The plague ended up in Europe and China, and due to China’s trade routes through the Indian Ocean, the Middle East, and South Asia also experienced some cases. It still exists to this day, but is extremely uncommon now.",
		x: 50,
		y: 50,
		percentsize: 20,
	},
	{
		type: "Person",
		svg: "person",
		name: "Zheng He and his Expedition",
		start: 1405,
		end: 1433,
		description:
		"He was a trusted official of the Chinese ruler at the time of the Ming Dynasty, Emperor Zhu Di. He was commanded by the emperor to project the power of China by going on expeditions. He was of Muslim heritage, and contributed much to the Indian Ocean trade with his expeditions, and in his lifetime, he made 7 expeditions around the China Sea and the Indian Ocean. His expedition party consisted of 62 ships and 27, 800 people The first expedition went to Java, Semudra, Aceh, Sri Lanka, and Calicut, the second went to Thailand, Java, Aru, Aceh, Coimbatore, Cochin, and Calicut. The fleet of ships sought trade, learned of other cultures, fought pirates, and exchanged Chinese goods. These missions also effected the extension of China’s political sway over maritime trade for a long period of time.",
		x: 72,
		y: 22,
		percentsize: 4,
	},
	{
		type: "Place",
		svg: "place",
		name: "Cambay (Modern day Khambat)",
		description:
		"Cambay, in Gujarat, was a location where many widely traveled sailors came from. It was one of the many important trading centers in the Indian Ocean, especially during the post-classical era.",
		x: 54,
		y: 26,
		percentsize: 4,
	},
];


var svgs = {
	"person": `<svg height="100%" width="100%" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	viewBox="0 0 512 512"  xml:space="preserve">
<style type="text/css">
   .st0{fill:#000000;}
</style>
<g>
   <path class="st0" d="M359.51,367.614c-19.106-7.148-40.877-18.276-40.877-32.676c0-9.533,0-21.444,0-37.782
	   c6.996-19.393,17.51-20.781,22.768-50.546c12.254-4.379,19.258-11.384,28.009-42.026c6.574-23.064-3.112-29.254-9.382-30.905
	   c0.128-1.229,0.256-2.466,0.359-3.917c2.369-34.543,22.425-137.078-47.012-149.332c-18.38-14.296-30.043-20.774-69.437-18.38
	   C219.001,2.042,200.046,7.547,173.632,0c-35.245,29.565-25.561,126.66-20.63,173.504c-6.199,1.388-16.889,7.148-10.052,31.08
	   c8.744,30.641,15.748,37.646,28.001,42.026c5.258,29.765,21.252,39.322,22.417,50.546c0,16.338,0,28.248,0,37.782
	   c0,14.4-23.494,26.55-40.877,32.676C119.058,379.397,25.911,414.275,34.073,512h443.856
	   C486.09,414.275,392.712,380.035,359.51,367.614z"/>
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
	"place": `<svg width="100%" height="100%" viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>pin_fill_sharp_circle [#634]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-223.000000, -5399.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M174,5248.219 C172.895,5248.219 172,5247.324 172,5246.219 C172,5245.114 172.895,5244.219 174,5244.219 C175.105,5244.219 176,5245.114 176,5246.219 C176,5247.324 175.105,5248.219 174,5248.219 M174,5239 C170.134,5239 167,5242.134 167,5246 C167,5249.866 174,5259 174,5259 C174,5259 181,5249.866 181,5246 C181,5242.134 177.866,5239 174,5239" id="pin_fill_sharp_circle-[#634]">

</path>
            </g>
        </g>
    </g>
</svg>`,
	"invention": `<svg width="100%" height="100%" viewBox="0 0 16 16" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" id="svg6190" version="1.1"><metadata id="metadata6196"><rdf:RDF><cc:Work><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/><dc:date>2021</dc:date><dc:creator><cc:Agent><dc:title>Timothée Giet</dc:title></cc:Agent></dc:creator><cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/"/></cc:Work><cc:License rdf:about="http://creativecommons.org/licenses/by-sa/4.0/"><cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/><cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/><cc:requires rdf:resource="http://creativecommons.org/ns#Notice"/><cc:requires rdf:resource="http://creativecommons.org/ns#Attribution"/><cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/><cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike"/></cc:License></rdf:RDF></metadata><defs id="defs6194"><linearGradient gradientTransform="translate(-4 4)" osb:paint="solid" id="linearGradient1163"><stop id="stop1161" offset="0" style="stop-color:#000000;stop-opacity:1"/></linearGradient></defs><path id="path1641" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 2a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6z" style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:.55063291"/><rect style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;stroke:none;stroke-width:4.45366764;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:.55063291" id="rect1152-3-5" width="2" height="14.370387" x="7" y="-15" transform="rotate(90)"/><rect style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;stroke:none;stroke-width:4.45366764;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:.55063291" id="rect1152-3-5-3" width="2" height="14.370387" x="9.7678213" y="-4.1643934" transform="rotate(30)"/><rect style="opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;stroke:none;stroke-width:4.45366764;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:.55063291" id="rect1152-3-5-3-6" width="2" height="14.370387" x="1.7678211" y="3.6504133" transform="rotate(-30)"/></svg>`,
	"goods": `<svg fill="#000000" width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<title>gold-bar</title>
	<path d="M11.652 19.245l-0.001-0.001-0.005-0.003zM30.671 16.098l-2.207-5.839-8.022-4.361-16.624 8.861-2.431 6.495 9.8 5.214 0.161-7.067-7.624-4.353 0.654 0.346-0.373-0.215 1.332 0.708-1.212-0.708 7.526 4.065 16.205-8.376-2.594 1.424 3.037-1.551-6.011 3.183-10.434 5.727-0.668 6.816 19.484-10.371zM11.976 17.206l-4.389-2.342 4.269 1.32 13.070-5.8-12.95 6.822z"></path>
	</svg>`,
	"traderoutes": `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
	<defs>
	  <style>
		.traderouteline {
		  fill: none;
		  stroke: #000;
		  stroke-miterlimit: 10;
		  stroke-width: 5px;
		  opacity: 0.6;
		}
	  </style>
	</defs>
	<polyline class="traderouteline" points="247.33 147.33 302.67 236 405.33 178.67 358.49 145.5 342.67 152 315.46 124.03"/>
	<polyline class="traderouteline" points="405.33 178.67 277.53 332.11 286.67 405.33 256.67 424.67"/>
	<polyline class="traderouteline" points="281.21 361.6 340.67 377.33 346 444 362 435.33"/>
	<line class="traderouteline" x1="277.53" y1="332.11" x2="467.17" y2="234.22"/>
	<line class="traderouteline" x1="405.33" y1="178.67" x2="467.17" y2="234.22"/>
	<path class="traderouteline" d="M347.72,210.84l119.45,23.38,6.83,43.78,117.33-10,36.67,41.33,42-136"/>
	<polyline class="traderouteline" points="650.65 236 726 279.33 735.97 295.79 752.67 286.67 775.23 308"/>
	<line class="traderouteline" x1="491.04" y1="236" x2="578.97" y2="272.72"/>
	<path class="traderouteline" d="M540.52,272.33l112.81,103,64.67-6"/>
	<line class="traderouteline" x1="630.37" y1="301.67" x2="690.38" y2="258.85"/>
  </svg>`
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
var noneColor = "#bdbdbd"
var midNumber = document.getElementById("midnumber");
var minNumber = document.getElementById("minnumber");
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
slider.max = 1451 / increment
var dataLength = data.length;


round = (10 ** keyRound)

function update() {
	number = Math.round(number)
	numberConverted = number * increment
	index = number - slider.min
	if (numberConverted < 600) {
		output.innerHTML = numberConverted + " (Classical Era)"
	} else {
		output.innerHTML = numberConverted + " (Post-Classical Era)"
	}
	map.innerHTML =
		'<img src="world.svg"></img>'
	for (var i = 0; i < dataLength; i++) {
		if ((data[i]['start'] <= numberConverted) || data[i]['start'] == null) {
			map.innerHTML +=
				'<div class="mapitem" style="position:absolute; top: ' + data[i]['y'] + '%; left: ' + data[i]['x'] + '%; width: ' + data[i]['percentsize'] + '%; height: auto; z-index: 1000;" id="' + data[i]['name'] + '">' + svgs[data[i]['svg']] + '</div>'
		} else if (data[i]['start'] <= numberConverted && data[i]['end'] == null) {
			map.innerHTML +=
				'<div class="mapitem" style="position:absolute; top: ' + data[i]['y'] + '%; left: ' + data[i]['x'] + '%; width: ' + data[i]['percentsize'] + '%; height: auto; z-index: 1000;" id="' + data[i]['name'] + '">' + svgs[data[i]['svg']] + '</div>'
		}

	}
	if (numberConverted > 1450) {
		map.innerHTML =
		'<img src="world.svg">'
		map.innerHTML +=
		'<div class="mapitem" style="position:absolute; top: 0%; left: 0%; width: 100%; height: auto; z-index: 1000;"><img src="worldmodern.svg"></div>'

		output.innerHTML = "Present Day"
		title.innerHTML = "Present Day"
		time.innerHTML = "Right Now!"
		type.innerHTML = "You've reached the end of the timeline!"
		about.innerHTML = "Today, maritime trade in the Indian Ocean is not very active, with more modern goods, such as oil, that wasn’t used in historical times, and much more advanced technology than before, such as better ships, that are traded across the route. The main challenge that faces maritime trade is disputes between regions, which makes trading far more difficult. Trade can now happen through the Suez Canal in Egypt. This allows for ships to travel between Asia and Europe without having going around Africa, which takes longer."
		abouttext.innerHTML = ""
	} else if (title.innerHTML == "Present Day") {
		title.innerHTML = ""
		time.innerHTML = ""
		type.innerHTML = ""
		about.innerHTML = ""
		abouttext.innerHTML = abouttextinner
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
								time.innerHTML = "Before the Post-Classical Era"
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
					if (data[p]['end'] != null) {
						if (data[p]['end'] < numberConverted) {
							console.log("hi")
							gtags[e].style.fill = "#ff0000"
							gtags[e].style.opacity = "0.6"
						}
					}
				}
			}
			// )
		}
	}
	for (var i = 0; i < dataLength; i++) {
		if (data[i]['name'] == title.innerHTML) {
			if (data[i]['start'] > numberConverted) {
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
			slider.value = slider.value - 5
			number = slider.value;
			update()
			break;
		case 39:
			slider.value = number + 5
			number = slider.value;
			update()
			break;
	}
};

onload = function () {
	number = 600
	slider.value = number
	update()
}
