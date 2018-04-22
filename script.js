  var price = 0;
  var bitcoinsinwallet=0;
  var cash=1000;
  var bitminer1numberofbtc=-0;
  var bitminer2numberofbtc=-0;
  var bitminer3numberofbtc=-0;
  var bitminer4numberofbtc=-0;
  var bitminer5numberofbtc=-0;
  var bitcoin1speed=0.001;
  var bitcoin2speed=0.001;
  var bitcoin3speed=0.001;
  var bitcoin4speed=0.001;
  var bitcoin5speed=0.001;
  var bitcoinminer1=false; 
  var bitcoinminer2=false;
  var bitcoinminer3=false;
  var bitcoinminer4=false;
  var bitcoinminer5=false; // All of these booleans are basically whether the miner has been bought or not

  var current = "upgrades";

  window.onload= setInterval(randomprice,5000);

  function collectbitcoin(minernumber)
  {
    switch(minernumber)
    {
      case 1:
      bitcoinsinwallet=bitcoinsinwallet+bitminer1numberofbtc-bitcoin1speed;
      bitminer1numberofbtc=0;
      shownumberofbitcoinsinwallet(); 
      mine1();
      break;

      case 2:
      bitcoinsinwallet=bitcoinsinwallet+bitminer2numberofbtc-bitcoin2speed;
      bitminer2numberofbtc=0;
      shownumberofbitcoinsinwallet();
      mine2();
      break;

      case 3:
      bitcoinsinwallet=bitcoinsinwallet+bitminer3numberofbtc-bitcoin3speed;
      bitminer3numberofbtc=0;
      shownumberofbitcoinsinwallet();
      mine3();
      break;

      case 4:
      bitcoinsinwallet=bitcoinsinwallet+bitminer4numberofbtc-bitcoin4speed;
      bitminer4numberofbtc=0;
      shownumberofbitcoinsinwallet();
      mine4();
      break;

      case 5:
      bitcoinsinwallet=bitcoinsinwallet+bitminer5numberofbtc-bitcoin5speed;
      bitminer5numberofbtc=0;
      shownumberofbitcoinsinwallet();
      mine5();
    }
  }

  function shownumberofbitcoinsinwallet()
  {
      bitcoinsinwallet=Math.round(bitcoinsinwallet*10000)/10000;
      document.getElementById('bitcoinsinwallet').innerHTML = "Bitcoins in wallet: " + bitcoinsinwallet ;
  }

  function randomprice()
  {
    price = Math.floor((Math.random()*10000)+1);
    document.getElementById('bitcoinprice').innerHTML = "Price of 1 Bitcoin: $" + price;
  }

  function changeTab(Id) {
  document.getElementById(current).style.display = 'none'; 
  document.getElementById(Id).style.display = 'block';
  current = Id;
}

function buybitcoinminer(number)
{
        switch(number)
{
  case 1:
  if(bitcoinminer1 == false && cash>=800)
  {
    document.getElementById('bitpic1').style.backgroundImage = "url('Images/comp.png')";
    bitcoinminer1=true;
    document.getElementById('bit1price').innerHTML = "";
    cash=cash-800;
    showcash();
    document.getElementById("miner1collectbitcoins").style.display = "block";
    mine1();
    setInterval(mine1,1000);
  }
  else if(cash<800 && bitcoinminer1 == false)
  {
    alert("You don't have enough money to buy this");
  }
  else
  {

  }
  break;
  case 2:
  if(bitcoinminer2 == false && cash>=800)
  {
    document.getElementById('bitpic2').style.backgroundImage = "url('Images/comp.png')"; 
    bitcoinminer2=true;
    document.getElementById('bit2price').innerHTML = "";
    cash=cash-800;
    showcash();
    document.getElementById("miner2collectbitcoins").style.display = "block";
    mine2();
    setInterval(mine2,1000);
  }
  else if(cash<800 && bitcoinminer2 == false)
  {
      alert("You don't have enough money to buy this");
  }
  else 
  {

  }
  break;
  case 3:
  if(bitcoinminer3 == false && cash>=800)
  {
    document.getElementById('bitpic3').style.backgroundImage = "url('Images/comp.png')";
    bitcoinminer3 = true;
    document.getElementById('bit3price').innerHTML = "";
    cash=cash-800;
    showcash();
    document.getElementById("miner3collectbitcoins").style.display = "block";
    mine3();
    setInterval(mine3,1000);
  }
  else if(cash<800 && bitcoinminer3 == false)
  {
    alert("You don't have enough money to buy this");
  }
  else
  {

  }
  break;
  case 4:
  if(bitcoinminer4 == false && cash>=800)
  {
    document.getElementById('bitpic4').style.backgroundImage = "url('Images/comp.png')";
    bitcoinminer4 = true;
    document.getElementById('bit4price').innerHTML = "";
    cash=cash-800;
    showcash();
    document.getElementById("miner4collectbitcoins").style.display = "block";
    mine4();
    setInterval(mine4,1000);
  }
  else if (cash<800 && bitcoinminer4 == false)
  {
    alert("You don't have enough money to buy this");
  }
  else
  {

  }
  break;
  case 5:
  if(bitcoinminer5 == false)
  {
    document.getElementById('bitpic5').style.backgroundImage = "url('Images/comp.png')";
    bitcoinminer5 = true;
    document.getElementById('bit5price').innerHTML = "";
    cash=cash-800;
    showcash();
    document.getElementById("miner5collectbitcoins").style.display = "block";
    mine5();
    setInterval(mine5,1000);
  }
  else if(cash<800 && bitcoinminer5 == flase)
  {
    alert("You don't have enough money to buy this");
  }
  else
  {

  }
}
}
function mine1()
{
  document.getElementById('bitminer1numberofbtc').innerHTML = bitminer1numberofbtc + ' btc';
  document.getElementById('bitminer1persec').innerHTML = bitcoin1speed + ' btc/sec';
  bitminer1numberofbtc = bitminer1numberofbtc + (bitcoin1speed);
  bitminer1numberofbtc = Math.round(bitminer1numberofbtc*10000)/10000;
}

function mine2()
{
  document.getElementById('bitminer2numberofbtc').innerHTML = bitminer2numberofbtc + ' btc';
  document.getElementById('bitminer2persec').innerHTML = bitcoin2speed + ' btc/sec';
  bitminer2numberofbtc = bitminer2numberofbtc + (bitcoin2speed);
  bitminer2numberofbtc = Math.round(bitminer2numberofbtc*10000)/10000;
}


function mine3()
{
  document.getElementById('bitminer3numberofbtc').innerHTML = bitminer3numberofbtc + ' btc';
  document.getElementById('bitminer3persec').innerHTML = bitcoin3speed + ' btc/sec';
  bitminer3numberofbtc = bitminer3numberofbtc + (bitcoin3speed);
  bitminer3numberofbtc = Math.round(bitminer3numberofbtc*10000)/10000;
}

function mine4()
{
  document.getElementById('bitminer4numberofbtc').innerHTML = bitminer4numberofbtc + ' btc';
  document.getElementById('bitminer4persec').innerHTML = bitcoin4speed + ' btc/sec';
  bitminer4numberofbtc = bitminer4numberofbtc + (bitcoin4speed);
  bitminer4numberofbtc = Math.round(bitminer4numberofbtc*10000)/10000;
}

function mine5()
{
  document.getElementById('bitminer5numberofbtc').innerHTML = bitminer5numberofbtc + ' btc';
  document.getElementById('bitminer5persec').innerHTML = bitcoin5speed + ' btc/sec';
  bitminer5numberofbtc = bitminer5numberofbtc + (bitcoin5speed);
  bitminer5numberofbtc = Math.round(bitminer5numberofbtc*10000)/10000;
}

function showcash()
{ 
  cash = Math.round(cash*10000)/10000;
  document.getElementById('cash').innerHTML = "Cash: $" + cash;
}

function buy()
{
  var quantity = document.getElementById("bitcointraded").value;
  quantity = parseFloat(quantity);
  var spending = price * quantity
  if(cash >= spending)
  {
      bitcoinsinwallet = bitcoinsinwallet + quantity;
      cash = cash - spending;
      showcash();
      shownumberofbitcoinsinwallet();
  }
  else
  {
      alert("You do not have enough money to purchase this quantity of bitcoins");
  }
}

function sell()
{
  var quantity = document.getElementById("bitcointraded").value;
  quantity = parseFloat(quantity);
  returns = quantity*price;
  if(bitcoinsinwallet >= quantity)
  {
      bitcoinsinwallet = bitcoinsinwallet - quantity;
      cash = cash + returns;
      showcash();
      shownumberofbitcoinsinwallet();
  }
  else
  {
    alert("You do not have this many bitcoins")
  }
}
