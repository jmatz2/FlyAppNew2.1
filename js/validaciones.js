
function validaAeropuertos(){
  
  var paoirg= document.getElementById("paisOrigen").selectedIndex;
  var padest= document.getElementById("paisDestino").selectedIndex;
  var cdorig= document.getElementById("aeropuertoOrigen").value;
  var cddest= document.getElementById("aeropuertoDestino").value;
    
  if(paoirg=='0'){
      alert("Seleccione un aeropuerto de origen");
      window.location="error.html";
  }
  
  if(padest=='0'){
      alert("Seleccione un aeropuerto de destino");
      window.location="error.html";
  }
  
  if(cdorig==cddest){
      alert("No puede seleccionar la misma ciudad");
      window.location="error.html";
  }
}

function validaPasajeros(){
    var adul=document.getElementById("opcAdulto").value;
    var men = document.getElementById("opcmenor").value;
    var inf = document.getElementById("opcinfante").value;
    
    
    var nomAdul1=document.getElementById("adul1").value;
    var appAdul1=document.getElementById("apPat1").value;
    var apmAdul1=document.getElementById("apMat1").value;
    
    var nomAdul2=document.getElementById("adul2").value;
    var appAdul2=document.getElementById("apPat2").value;
    var apmAdul2=document.getElementById("apMat2").value;    
    
    var nomAdul3=document.getElementById("adul3").value;
    var appAdul3=document.getElementById("apPat3").value;
    var apmAdul3=document.getElementById("apMat3").value;    
    
    var nomAdul4=document.getElementById("adul4").value;
    var appAdul4=document.getElementById("apPat4").value;
    var apmAdul4=document.getElementById("apMat4").value;    
    
    var nomAdul5=document.getElementById("adul5").value;
    var appAdul5=document.getElementById("apPat5").value;
    var apmAdul5=document.getElementById("apMat5").value;
        
    var nomMen1=document.getElementById("men1").value;
    var appMen1=document.getElementById("apPatmen1").value;
    var apmMen1=document.getElementById("apMatmen1").value;
        
    var nomMen2=document.getElementById("men2").value;
    var appMen2=document.getElementById("apPatmen2").value;
    var apmMen2=document.getElementById("apMatmen2").value;
        
    var nomMen3=document.getElementById("men3").value;
    var appMen3=document.getElementById("apPatmen3").value;
    var apmMen3=document.getElementById("apMatmen3").value;
        
    var nomInf1=document.getElementById("inf1").value;
    var appInf1=document.getElementById("apPatinf1").value;
    var apmInf1=document.getElementById("apMatinf1").value;    
        
    var nomInf2=document.getElementById("inf2").value;
    var appInf2=document.getElementById("apPatinf2").value;
    var apmInf2=document.getElementById("apMatinf2").value;
        
    var nomInf3=document.getElementById("inf3").value;
    var appInf3=document.getElementById("apPatinf3").value;
    var apmInf3=document.getElementById("apMatinf3").value;
       
    if(adul=='1'){
	if(nomAdul1==""){
	  alert("Ingrese el Nombre del adulto 1");
	  window.location="error.html";
	}
	if(appAdul1==""){
	  alert("Ingrese el Apellido Paterno del adulto 1");
	  window.location="error.html";
	}
	if(apmAdul1==""){
	  alert("Ingrese el Apellido Materno del adulto 1");
	  window.location="error.html";
	}	
    }
    
    if(adul=='2'){
	if(nomAdul1==""){
	  alert("Ingrese el Nombre del adulto 1");
	  window.location="error.html";
	}
	if(appAdul1==""){
	  alert("Ingrese el Apellido Paterno del adulto 1");
	  window.location="error.html";
	}
	if(apmAdul1==""){
	  alert("Ingrese el Apellido Materno del adulto 1");
	  window.location="error.html";
	}
	if(nomAdul2==""){
	  alert("Ingrese el Nombre del adulto 2");
	  window.location="error.html";
	}
	if(appAdul2==""){
	  alert("Ingrese el Apellido Paterno del adulto 2");
	  window.location="error.html";
	}
	if(apmAdul2==""){
	  alert("Ingrese el Apellido Materno del adulto 2");
	  window.location="error.html";
	}	
    }
    
    if(adul=='3'){
	if(nomAdul1==""){
	  alert("Ingrese el Nombre del adulto 1");
	  window.location="error.html";
	}
	if(appAdul1==""){
	  alert("Ingrese el Apellido Paterno del adulto 1");
	  window.location="error.html";
	}
	if(apmAdul1==""){
	  alert("Ingrese el Apellido Materno del adulto 1");
	  window.location="error.html";
	}
	if(nomAdul2==""){
	  alert("Ingrese el Nombre del adulto 2");
	  window.location="error.html";
	}
	if(appAdul2==""){
	  alert("Ingrese el Apellido Paterno del adulto 2");
	  window.location="error.html";
	}
	if(apmAdul2==""){
	  alert("Ingrese el Apellido Materno del adulto 2");
	  window.location="error.html";
	}
	if(nomAdul3==""){
	  alert("Ingrese el Nombre del adulto 3");
	  window.location="error.html";
	}
	if(appAdul3==""){
	  alert("Ingrese el Apellido Paterno del adulto 3");
	  window.location="error.html";
	}
	if(apmAdul3==""){
	  alert("Ingrese el Apellido Materno del adulto 3");
	  window.location="error.html";
	}	
    }
    
    if(adul=='4'){
	if(nomAdul1==""){
	  alert("Ingrese el Nombre del adulto 1");
	  window.location="error.html";
	}
	if(appAdul1==""){
	  alert("Ingrese el Apellido Paterno del adulto 1");
	  window.location="error.html";
	}
	if(apmAdul1==""){
	  alert("Ingrese el Apellido Materno del adulto 1");
	  window.location="error.html";
	}
	if(nomAdul2==""){
	  alert("Ingrese el Nombre del adulto 2");
	  window.location="error.html";
	}
	if(appAdul2==""){
	  alert("Ingrese el Apellido Paterno del adulto 2");
	  window.location="error.html";
	}
	if(apmAdul2==""){
	  alert("Ingrese el Apellido Materno del adulto 2");
	  window.location="error.html";
	}
	if(nomAdul3==""){
	  alert("Ingrese el Nombre del adulto 3");
	  window.location="error.html";
	}
	if(appAdul3==""){
	  alert("Ingrese el Apellido Paterno del adulto 3");
	  window.location="error.html";
	}
	if(apmAdul3==""){
	  alert("Ingrese el Apellido Materno del adulto 3");
	  window.location="error.html";
	}
	if(nomAdul4==""){
	  alert("Ingrese el Nombre del adulto 4");
	  window.location="error.html";
	}
	if(appAdul4==""){
	  alert("Ingrese el Apellido Paterno del adulto 4");
	  window.location="error.html";
	}
	if(apmAdul4==""){
	  alert("Ingrese el Apellido Materno del adulto 4");
	  window.location="error.html";
	}
	
    }
    
    if(adul=='5'){
	if(nomAdul1==""){
	  alert("Ingrese el Nombre del adulto 1");
	  window.location="error.html";
	}
	if(appAdul1==""){
	  alert("Ingrese el Apellido Paterno del adulto 1");
	  window.location="error.html";
	}
	if(apmAdul1==""){
	  alert("Ingrese el Apellido Materno del adulto 1");
	  window.location="error.html";
	}
	if(nomAdul2==""){
	  alert("Ingrese el Nombre del adulto 2");
	  window.location="error.html";
	}
	if(appAdul2==""){
	  alert("Ingrese el Apellido Paterno del adulto 2");
	  window.location="error.html";
	}
	if(apmAdul2==""){
	  alert("Ingrese el Apellido Materno del adulto 2");
	  window.location="error.html";
	}
	if(nomAdul3==""){
	  alert("Ingrese el Nombre del adulto 3");
	  window.location="error.html";
	}
	if(appAdul3==""){
	  alert("Ingrese el Apellido Paterno del adulto 3");
	  window.location="error.html";
	}
	if(apmAdul3==""){
	  alert("Ingrese el Apellido Materno del adulto 3");
	  window.location="error.html";
	}
	if(nomAdul4==""){
	  alert("Ingrese el Nombre del adulto 4");
	  window.location="error.html";
	}
	if(appAdul4==""){
	  alert("Ingrese el Apellido Paterno del adulto 4");
	  window.location="error.html";
	}
	if(apmAdul4==""){
	  alert("Ingrese el Apellido Materno del adulto 4");
	  window.location="error.html";
	}
	if(nomAdul5==""){
	  alert("Ingrese el Nombre del adulto 5");
	  window.location="error.html";
	}
	if(appAdul5==""){
	  alert("Ingrese el Apellido Paterno del adulto 5");
	  window.location="error.html";
	}
	if(apmAdul5==""){
	  alert("Ingrese el Apellido Materno del adulto 5");
	  window.location="error.html";
	}	
    }
    
    if(men=='1'){
	if(nomMen1==""){
	    alert("Ingrese el Nombre del menor 1");
	    window.location="error.html";
	}
	if(appMen1==""){
	    alert("Ingrese el Apellido Paterno del menor 1");
	    window.location="error.html";
	}
	if(apmMen1==""){
	    alert("Ingrese el Apellido Materno del menor 1");
	    window.location="error.html";
	}	
    }
    
    if(men=='2'){
	if(nomMen1==""){
	    alert("Ingrese el Nombre del menor 1");
	    window.location="error.html";
	}
	if(appMen1==""){
	    alert("Ingrese el Apellido Paterno del menor 1");
	    window.location="error.html";
	}
	if(apmMen1==""){
	    alert("Ingrese el Apellido Materno del menor 1");
	    window.location="error.html";
	}
	if(nomMen2==""){
	    alert("Ingrese el Nombre del menor 2");
	    window.location="error.html";
	}
	if(appMen2==""){
	    alert("Ingrese el Apellido Paterno del menor 2");
	    window.location="error.html";
	}
	if(apmMen2==""){
	    alert("Ingrese el Apellido Materno del menor 2");
	    window.location="error.html";
	}
    }
    
    if(men=='3'){      
	if(nomMen1==""){
	    alert("Ingrese el Nombre del menor 1");
	    window.location="error.html";
	}
	if(appMen1==""){
	    alert("Ingrese el Apellido Paterno del menor 1");
	    window.location="error.html";
	}
	if(apmMen1==""){
	    alert("Ingrese el Apellido Materno del menor 1");
	    window.location="error.html";
	}
	if(nomMen2==""){
	    alert("Ingrese el Nombre del menor 2");
	    window.location="error.html";
	}
	if(appMen2==""){
	    alert("Ingrese el Apellido Paterno del menor 2");
	    window.location="error.html";
	}
	if(apmMen2==""){
	    alert("Ingrese el Apellido Materno del menor 2");
	    window.location="error.html";
	}
	if(nomMen3==""){
	    alert("Ingrese el Nombre del menor 3");
	    window.location="error.html";
	}
	if(appMen3==""){
	    alert("Ingrese el Apellido Paterno del menor 3");
	    window.location="error.html";
	}
	if(apmMen3==""){
	    alert("Ingrese el Apellido Materno del menor 3");
	    window.location="error.html";
	}
    }
    
    if(inf=='1'){
	if(nomInf1==""){
	    alert("Ingrese el Nombre del infante 1");
	    window.location="error.html";
	}
	if(appInf1==""){
	    alert("Ingrese el Apellido Paterno del infante 1");
	    window.location="error.html";
	}
	if(apmInf1==""){
	    alert("Ingrese el Apellido Materno del infante 1");
	    window.location="error.html";
	}
    }
    
    if(inf=='2'){
	if(nomInf1==""){
	    alert("Ingrese el Nombre del infante 1");
	    window.location="error.html";
	}
	if(appInf1==""){
	    alert("Ingrese el Apellido Paterno del infante 1");
	    window.location="error.html";
	}
	if(apmInf1==""){
	    alert("Ingrese el Apellido Materno del infante 1");
	    window.location="error.html";
	}
    }
    
    if(inf=='3'){
	if(nomInf1==""){
	    alert("Ingrese el Nombre del infante 1");
	    window.location="error.html";
	}
	if(appInf1==""){
	    alert("Ingrese el Apellido Paterno del infante 1");
	    window.location="error.html";
	}
	if(apmInf1==""){
	    alert("Ingrese el Apellido Materno del infante 1");
	    window.location="error.html";
	}
	if(nomInf2==""){
	    alert("Ingrese el Nombre del infante 2");
	    window.location="error.html";
	}
	if(appInf2==""){
	    alert("Ingrese el Apellido Paterno del infante 2");
	    window.location="error.html";
	}
	if(apmInf2==""){
	    alert("Ingrese el Apellido Materno del infante 2");
	    window.location="error.html";
	}
	if(nomInf3==""){
	    alert("Ingrese el Nombre del infante 3");
	    window.location="error.html";
	}
	if(appInf3==""){
	    alert("Ingrese el Apellido Paterno del infante 3");
	    window.location="error.html";
	}
	if(apmInf3==""){
	    alert("Ingrese el Apellido Materno del infante 3");
	    window.location="error.html";
	}
    }
}

function validarAsientos(){
    var adul=document.getElementById("opcAdulto").value;
    var men = document.getElementById("opcmenor").value;
    var inf = document.getElementById("opcinfante").value;
    
    var asientoAdul1 = document.getElementById("filter-menu").value;    
    var asientoAdul2= document.getElementById("filter-menu1").value;    
    var asientoAdul3= document.getElementById("filter-menu3").value;
    var asientoAdul4= document.getElementById("filter-menu4").value;
    var asientoAdul5= document.getElementById("filter-menu5").value;
    
    var asientoMen1= document.getElementById("filter-menu6").value;
    var asientoMen2= document.getElementById("filter-menu7").value;
    var asientoMen3= document.getElementById("filter-menu8").value;
    
    var asientoInf1= document.getElementById("filter-menu9").value;
    var asientoInf2= document.getElementById("filter-menu10").value;
    var asientoInf3= document.getElementById("filter-menu11").value;
            
    if(adul=='2'){
	if(asientoAdul1==asientoAdul2){
	    alert("Verifique que los asientos no se repitan");
	}
    }
    if(adul=='3'){
	if(asientoAdul1==asientoAdul2 || asientoAdul1==asientoAdul3 || asientoAdul2==asientoAdul3){
	    alert("Verifique que los asientos no se repitan");
	}
    }
    if(adul=='4'){
	if(asientoAdul1==asientoAdul2 || asientoAdul1==asientoAdul3 || asientoAdul1==asientoAdul4 || asientoAdul2==asientoAdul3 || asientoAdul2==asientoAdul4 ||
	  asientoAdul3==asientoAdul4){
	    alert("Verifique que los asientos no se repitan");
	}
    }
    if(adul=='5'){
	if(asientoAdul1==asientoAdul2 || asientoAdul1==asientoAdul3 || asientoAdul1==asientoAdul4 || asientoAdul1==asientoAdul5 ||
	  asientoAdul2==asientoAdul3 || asientoAdul2==asientoAdul4 || asientoAdul2==asientoAdul5 || asientoAdul3==asientoAdul4 || asientoAdul3==asientoAdul5||
	  asientoAdul4==asientoAdul5){
	    alert("Verifique que los asientos no se repitan");
	}
    }
    if(adul=='1' && men=='1'){
	if(asientoAdul1==asientoMen1){
	    alert("Verifique que los asientos no se repitan");
	}
    }
    if(adul=='1' && men=='2'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoMen1==asientoMen2){
	    alert("Verifique que los asientos no se repitan");
	}
    }
    if(adul=='1' && men=='3'){
	if(asientoAdul1==asientoMen1||asientoAdul1==asientoMen2||asientoAdul1==asientoMen3){
	  
	}
    }
    
    }
