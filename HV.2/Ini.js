
function obtener_localstorage(){
	let intro = JSON.parse(localStorage.getItem("intro"));
	return intro;
}
function obtener_localstoragelinea1(){
	
	console.log(obtener_localstorage().linea1);
		$("#linea1").text( obtener_localstorage().linea1);
}
function obtener_localstoragelinea2(){
	
	console.log(obtener_localstorage().linea2);
		$("#linea2").text(  obtener_localstorage().linea2);
}
function obtener_localstoragelinea3(){
	
	console.log(obtener_localstorage().linea3);
		$("#linea3").text( obtener_localstorage().linea3);
}
function obtener_localstoragelinea4(){
	
	console.log(obtener_localstorage().linea4);
		$("#linea4").text(  obtener_localstorage().linea4);
}
function obtener_localstoragelinea5(){
	
	console.log(obtener_localstorage().linea5);
		$("#linea5").text( obtener_localstorage().linea5);
}
function guardar_localstorageini(){
	
	let intro ={ 
	linea1:"Este grupo de trabajo está compuesto por Jhon Sebastian Martinez Zabala, Juan Sebastian Mancera Gaitan",
	linea2:"y estudiantes de Universidad Distrital Francisco Jose de caldas profesionales en el desarrollo",
	linea3:"de software, ciencia de tados, machine learnig. Con conocimentos y manejo de herramientas estadísticas",
	linea4:"y probabilísticas Interesados on ofrecer el mejor servicio utilizando las tecnologias que permitan el",
	linea5:"mejor desempeño del servicio prestado."
	
	};
	
	localStorage.setItem("intro",JSON.stringify(intro));
}