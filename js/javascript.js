console.log("okej");

$("#form-style").submit(function(e) {
    e.preventDefault();
});
function provera(){
  console.log("Radi");
  var kola = document.getElementById("car-select");
  var ime = document.getElementById("ime");
  var email = document.getElementById("email");
  var broj = document.getElementById("broj");
  var imeSadr = ime.value;
  var emailSadr = email.value;
  var brojSadr = parseInt(broj.value);

  console.log("Uneto ime je : "+imeSadr);
  console.log("Uneti E-mail je : "+emailSadr);
  if( !isNaN(brojSadr) && brojSadr!=null ){
  console.log("Uneti broj telefona je : "+brojSadr);
} else {
  console.log("Nije uneta ispravna vrednost!");
}

};
