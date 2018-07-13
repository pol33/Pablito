function mostrar()
{
	var res;
	var numero;
	var mayor;
	var menor;
	var aux="0";
	var suma=0;
	var numPares=0;
	do{

		numero=prompt("Escriba un numero");
		numero=parseInt(numero);

		while(isNaN(numero)){
			numero=prompt("Incorrecto");
        	numero=parseInt(numero);
        }

        if(numero%2==0){
        	numPares++;
        }

        suma=suma+numero;

		if(numero>mayor||aux=="0"){
		mayor=numero;
		}
		if(numero<menor||aux=="0"){
		menor=numero;
		aux="1";		
	    }
	    res=prompt("Desdea continuar");


  	}while(res=="s");

	alert("El mayor es "+mayor+" y el menor es "+menor+" y "+numPares+"La suma es "+suma);

}
function Mensaje()
{
	alert("Te estoy observando ANA!!!");
}