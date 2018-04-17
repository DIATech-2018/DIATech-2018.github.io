var current = 'btc';
function changeTab(Id) {
	document.getElementById(current).style.display = 'none';
	document.getElementById(Id).style.display = 'block';
	current = Id;
}
var Bitcoins = 0;
function Mine(number){
    Bitcoins = Bitcoins + number;
    document.getElementById("Bitcoins").innerHTML = Bitcoins;
};
var AutoMiners = 0;
function buyAutoMiner(){
    var MinerCost = Math.floor(10 * Math.pow(1.5,AutoMiners));
    if(Bitcoins >= MinerCost){                                 
        AutoMiners = AutoMiners + 1;                                  
    	Bitcoins = Bitcoins - MinerCost;                          
        document.getElementById('AutoMiners').innerHTML = AutoMiners;  
        document.getElementById('Bitcoins').innerHTML = Bitcoins;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.5,AutoMiners));       
    document.getElementById('MinerCost').innerHTML = nextCost;  
};
window.setInterval(function(){
	Mine(AutoMiners);
}, 1000);