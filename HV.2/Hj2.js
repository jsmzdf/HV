function obtener_localstorage(){
	let p1 = JSON.parse(localStorage.getItem("persona1"));
	return p1
}
function obtener_lsN(){
	console.log(obtener_localstorage().nombre);
		$("#nombre").text(obtener_localstorage().nombre);
}
function obtener_lsAp(){
	console.log(obtener_localstorage().apellido);
		$("#apellido").text(obtener_localstorage().apellido);
}

function obtener_lsloca(){
	console.log(obtener_localstorage().locacion);
		$("#locacion").text( obtener_localstorage().locacion);
}
/*aqui empieza*/
function obtener_lslocaCol(){
	console.log(obtener_localstorage().locacionCol);
		$("#locacionCol").text( obtener_localstorage().locacionCol);
}
function obtener_lst1(){
	console.log(obtener_localstorage().Titulo1);
		$("#Titulo1").text(obtener_localstorage().Titulo1);
}
function obtener_lsinst1(){
	console.log(obtener_localstorage().Institucion1);
		$("#Institucion1").text( obtener_localstorage().Institucion1);
}
function obtener_lsinteres1(){
	console.log(obtener_localstorage().interes1);
		$("#interes1").text( obtener_localstorage().interes1);
}
function obtener_lsinteres2(){
	console.log(obtener_localstorage().interes2);
		$("#interes2").text(obtener_localstorage().interes2);
}
function obtener_lsinteres3(){
	console.log(obtener_localstorage().interes3);
		$("#interes3").text(obtener_localstorage().interes3);
}
function obtener_lsinteres4(){
	console.log(obtener_localstorage().interes4);
		$("#interes4").text( obtener_localstorage().interes4);
}
function obtener_lsinteres5(){
	console.log(obtener_localstorage().interes5);
		$("#interes5").text(obtener_localstorage().interes5);
}
function obtener_lstr1l1(){
	console.log(obtener_localstorage().tr1Linea1);
		$("#tr1Linea1").text(obtener_localstorage().tr1Linea1);
}

function obtener_lstr1l2(){
	console.log(obtener_localstorage().tr1Linea2);
		$("#tr1Linea2").text( obtener_localstorage().tr1Linea2);
}
function obtener_lstr1l3(){
	console.log(obtener_localstorage().tr1Linea3);
		$("#tr1Linea3").text(obtener_localstorage().tr1Linea3);
}
function obtener_lstr2l1(){
	console.log(obtener_localstorage().tr2Linea1);
		$("#tr2Linea1").text( obtener_localstorage().tr2Linea1);
}
function obtener_lstr2l2(){
	console.log(obtener_localstorage().tr2zLinea2);
		$("#tr2zLinea2").text(obtener_localstorage().tr2zLinea2);
}
function obtener_lstr3l1(){
	console.log(obtener_localstorage().tr3Linea1);
		$("#tr3Linea1").text( obtener_localstorage().tr3Linea1);
}

function obtener_lslocacionUni(){
	console.log(obtener_localstorage().locacionUni);
		$("#locacionUni").text(obtener_localstorage().locacionUni);
}
function obtener_lsTitulo2(){
	console.log(obtener_localstorage().Titulo2);
		$("#Titulo2").text(obtener_localstorage().Titulo2);
}
function obtener_lsInstitucion2(){
	console.log(obtener_localstorage().Institucion2);
		$("#Institucion2").text( obtener_localstorage().Institucion2);
}

function guardar_localstorageper1(){
	
	let persona1 ={ 
	nombre:"Juan Sebastian",
	apellido:"Mancera Gaitan",
	locacion:"Ciudad y pais: Bogotá, Colombia",
	locacionCol:"Bogotá D.C., Colombia.",
	Titulo1: "Bachillerato.",
	Institucion1:" IED Alberto Lleras Camargo.",
	locacionUni:"Bogotá, Colombia.",
	Titulo2: "Ingeniero de sistemas.",
	Institucion2:" Universidad Distrital Francisco Jose de Caldas.",
	interes1:"Football.",
	interes2:"Analisis de datos.",
	interes3:"Ciencia de datos.",
	interes4:"Mineria de datos.",
	interes5:"Probabilidad.",
	 tr1Linea1:"software para la toma de desciciones , desarrollado en python",
	tr1Linea2:"que permitia al cliente visualizar, analizar y poder tomar desiciones gracias a las",
	tr1Linea3:"herramentas encotradas dentro de el.",
	tr2Linea1:"aplicacion implementando base de datos registrar documentos, desarrollado en c#, en",
	tr2zLinea2:"donde se registraba los documentos prestados cuales estaban en stock con fechas y estados.",
	tr3Linea1:"software en cual permitia graficar clases y sus tipos de relacion en java."
	};
	localStorage.setItem("persona1",JSON.stringify(persona1));
}