//tau represents the value by which rank differences cause fluctuations
tau = 1250
var players = [
"KJH",
"Duck",
"Ginger",
"Heartstrings",
"Morsecode762",
"Yoyo",
"Anther",
"MB-Smash",
"Quang",
"Russell",
"999",
"Kuyashi",
"Magicubed",
"i4n",
"Techboy",
"Crip",
"JCubez",
"Juggleguy",
"Mingee",
"Tran",
"Papyrus",
"tm",
"Sheep",
"Ossify",
"Parzival",
"Paz",
"Burlap",
"Dirtboy",
"Joka",
"Napkin",
"Datrooph",
"Lain",
"Brazmonkey",
"Hellsing",
"1der",
"Hunt",
"IDCrisis",
"Rose",
"Duo",
"Jakpox",
"Walrus",
"David",
"Starlight",
"Woley",
"DueL",
"Coin",
"Bigy",
"Jagerbombsoldier",
"Nexic",
"Yogi Backair",
"Cobb",
"Paul",
"Honeybaked",
"Beach",
"BiggPappa",
"Pops",
"JU4N",
"Cali",
"sacredtwin",
"Treetz",
"ADKnight",
"CDay",
"Ryko",
"Jubei",
"MajinJoseph",
"SilentShadow",
"Mars",
"Vexis",
"Math",
"Coupkey",
"GoonSquad",
"Rich",
"Pillars",
"GMAN",
"Colony",
"SuperMegaWalrus",
"Zen",
"CAM",
"Rayboyp",
"Nara",
"M.A.C.",
"Aghi",
"Shadez",
"Zam",
"AKA",
"Den",
"DyMg",
"Mirrorman",
"Tavi",
"Maclo4",
"DankLouie",
"BickTrip",
"sudo",
"Will",
"Jopps",
"Amac",
"S2j",
"roki",
"Nyte",
"Ceephax"
];
var ranks = [
9646,
9216,
8949,
8394,
8372,
8213,
7958,
7878,
7790,
7786,
7783,
7720,
7709,
7602,
7458,
7440,
7432,
7381,
7374,
7361,
7309,
7303,
7299,
7246,
7230,
7156,
7076,
7057,
7056,
6894,
6893,
6822,
6785,
6765,
6750,
6749,
6749,
6739,
6608,
6596,
6576,
6552,
6519,
6504,
6453,
6450,
6445,
6430,
6379,
6356,
6300,
6224,
6201,
6079,
6078,
6073,
6071,
6051,
6046,
6027,
6003,
5932,
5904,
5885,
5883,
5882,
5865,
5836,
5818,
5812,
5704,
5690,
5666,
5648,
5645,
5641,
5628,
5609,
5574,
5542,
5538,
5517,
5508,
5486,
5473,
5472,
5469,
5460,
5449,
5444,
5443,
5437,
5437,
5433,
5425,
5424,
5400,
5345,
5341,
5321
];
for (var i = 0; i < players.length; i++){
	players[i] = players[i].toLowerCase();
}
var playerClasses = document.getElementsByClassName("match--player-name");
var titleClasses = document.getElementsByClassName("match--player");
for (var i = 0; i < titleClasses.length; i++){
	var player0 = titleClasses[i].parentElement.childNodes[0].childNodes[0].innerHTML.toLowerCase();
	var player1 = titleClasses[i].parentElement.childNodes[1].childNodes[0].innerHTML.toLowerCase();
	var score0 = ranks[players.findIndex(checkEqual, player0)];
	var score1 = ranks[players.findIndex(checkEqual, player1)];
	var R0 = Math.pow(10,(score0/tau));
	var R1 = Math.pow(10,(score1/tau));
	if (score1 == undefined || score0 == undefined){
		continue;
	}
	//calculate elo change
	var E0 = R0/(R0 + R1);
	var change0 = (1-E0)*200;
	var E1 = R1/(R0 + R1);
	var change1 = (1-E1)*200;
	var oldHtml = titleClasses[i].parentElement.childNodes[0].innerHTML;
	var titleIndex1 = oldHtml.indexOf("title");
	var titleIndex2 = oldHtml.lastIndexOf("title");
	var newHtml = "<title>" + oldHtml.slice(7,titleIndex2 -2) + " | estimated gain for a win = "  + Math.round(change0) + "</title>" + oldHtml.slice(titleIndex2 + 6);
	titleClasses[i].parentElement.childNodes[0].innerHTML = newHtml;
	//set second players title
	oldHtml = titleClasses[i].parentElement.childNodes[1].innerHTML;
	titleIndex1 = oldHtml.indexOf("title");
	titleIndex2 = oldHtml.lastIndexOf("title");
	newHtml = "<title>" + oldHtml.slice(7,titleIndex2 -2) + " | estimated gain for a win = "  + Math.round(change1) + "</title>" + oldHtml.slice(titleIndex2 + 6);
	titleClasses[i].parentElement.childNodes[1].innerHTML = newHtml;
}

for (var i = 0; i < playerClasses.length; i++){
	var str =  playerClasses[i].innerHTML.toLowerCase();
	if (players.includes(str)){
		playerClasses[i].innerHTML = (playerClasses[i].innerHTML + " | CR: " + String(players.findIndex(checkEqual, str) + 1));
	}
}
function checkEqual(element, index, array){
	return element == this;
}