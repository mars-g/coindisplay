  //this script will be used to add elements to the popup page
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

var table = document.getElementById("playerTable");
for (var i = 0; i < players.length; i++){
  var row = table.insertRow(1+i);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  cell0.innerHTML = players[i];
  cell1.innerHTML = i+1;
  cell2.innerHTML = ranks[i];
}