function validar() {
	var user = document.getElementById("user");
	var email = document.getElementById("email");
	var pass1 = document.getElementById("pass1");
	var pass2 = document.getElementById("pass2");
	var codipos = document.getElementById("codipos");
	var sexo = document.getElementsByName("sexo");
	var seleccionado = false;
	var cidade = document.getElementById("cidade").selectedIndex;
	var elementoCHECK = document.getElementById("termos");

	if(user.value.length == 0)
	{
      alert("por favor, inserir usuario");
    	user.focus();
    	return false;
	}
	if(email.value.length == 0)
	{
		alert("Por favor, inserir email");
		email.focus();
		return false;
	}
	if(pass1.value.length < 6)
	{
		alert("por favor inserir senha");
		pass1.focus();
		return false;
	}
	else if(pass1.value != pass2.value)
	{
		alert("as senhas deven ser iguais");
		pass2.focus();
		return false;
	}
	if(codipos.value.length == 0)
	{
		alert("Por favor inserir cep");
		codipos.focus();
		return false;
	}
	else if(codipos.value.length != 0 && isNaN(codipos.value))
	{
		alert("Por favor inserir numeros no cep");
		codipos.focus();
		return false;
	}
	for(var i = 0; i<sexo.length; i++)
	{
		if(sexo[i].checked)
		{
			seleccionado = true;
		}
	}
	if(!seleccionado)
	{
		alert("por favor selecionar sexo:");
		return false;
	}
	if(cidade == 0 || cidade == null)
	{
		alert("Por favor, seleccione uma cidade");
		return false;
	}
	if(!elementoCHECK.checked)
	{
		alert("aceite os termos e condições");
		return false;
	}
  else
  {
    alert("Dados do formulario enviados .");
    document.getElementById("myForm").reset();
	  return false;
	}
}