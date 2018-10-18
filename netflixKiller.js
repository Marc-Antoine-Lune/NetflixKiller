function genereration(){
window.scrollTo({ 
  top: 250,
  left: 0, 
  behavior: 'smooth' 
});

var request = new XMLHttpRequest();
var valide = new Image();
request.onreadystatechange = function(){

	if(this.readyState == 4){
			
			var nom = request.response;
			
			document.getElementById("test").innerHTML= nom['Nom'];
			document.getElementById("test").appendChild(valide);
			creationAffiche(nom);
			ressourcesWeb(nom);
	}
	
	valide.src = "ok.png";
}

request.open('GET', 'donneesAjax.php', true);
request.send();
request.responseType = 'json';
}

function creationAffiche(jsonObj){

	var request = new XMLHttpRequest();
	var nomFilm = jsonObj['Film'];
	var url = "http://www.omdbapi.com/?t=" + nomFilm + "&apikey=3c81cbbb"
	request.open("GET", url);
	request.send();
	request.responseType = 'json';

	request.onload = function (){
		requeteJson = request.response;
		test(requeteJson);

	}
	
}

function test(jsonObj){
	var posterUrl = jsonObj['Poster'];
	var imagePoster = new Image();
	var pasValide = new Image();
	imagePoster.onload = function(){
		document.getElementById('image').innerHTML="";
		document.getElementById('image').appendChild(imagePoster);
		document.getElementById('image').appendChild(pasValide);

	}
	
	pasValide.src = "pasOk.png";
	imagePoster.src = posterUrl;

       
}



function ressourcesWeb(jsonObj){

	var request = new XMLHttpRequest();
	var nom = jsonObj['Nom'];
	var url = "https://www.googleapis.com/youtube/v3/search?&q=" + nom + "&part=snippet&key=" + "AIzaSyD-9VMPpURE4Ng992hjjr20hlDA35kDWlo";

	request.open("GET", url);
	request.send();
	request.responseType = 'json';

	

	request.onload = function(){
		var tab = request.response;
		document.getElementById("ressourcesVideos").innerHTML = "";

		for(var i=0; i<5; i++){
			var titre = tab['items'][i]['snippet']['title'];
			var urlVideo= tab['items'][1]['id']['videoId'];

			document.getElementById("ressourcesVideos").innerHTML += "<li><a href=https://www.youtube.com/watch?v=" + urlVideo + ">" + titre + "</a></li>";
		;



		}
	}
	

	
		

	}
