let bienvenida = prompt("Quien nos Visita");
alert("Bienvenido/a, " + bienvenida);

let usd = parseInt(
  prompt(
    "Cuanto estas dispuesto a gastar por una camiseta de Suarez? (cuestan entre 75 USD y 200 USD)"
  )
);

if (usd < 75) {
  alert("No te alcanza :(");
} else if (usd < 99) {
  alert("La de Ajax");
} else if (usd < 124) {
  alert("La de A. Madrid");
} else if (usd < 149) {
  alert("La de Liverpool");
} else if (usd < 174) {
  alert("La de Barcelona");
} else if (usd < 199) {
  alert("La de Uruguay");
} else if (usd <= 200) alert("La de Nacional");
else {
  alert("Comprate mas de 1");
}


    alert("Si estas dispuesto a comprar la camiseta registrate: " + bienvenida);
let registroUsuario = prompt("Nombre de usuario");
let registroContrasenia = prompt("Contraseña ");

alert("Ahora ingresa al sistema");
for (let i = 0; i < 3; i++) {
  let usuario = prompt("Nombre de usuario");
  let contrasenia = prompt("Contraseña ");
  if (usuario == registroUsuario && contrasenia == registroContrasenia) {
    alert("Bienvenido al sistema " + usuario);
    break;
  } else {
    alert(
      "Usuario " + usuario + " o contraseña " + contrasenia + " incorrectas"
    );
  }
}

let camiseta = prompt("La camiseta de que equipo quieres: 1-Nacional, 2-Uruguay, 3-Barcelona, 4-Liverpool, 5-A.Madrid, 6-Ajax ");
switch (camiseta) {
  case "1":
    alert("La camiseta de Nacional cuesta USD 200");
    break;
  case "2":
    alert("La camiseta de Uruguay cuesta USD 175");
    break;
  case "3" :
    alert("La camiseta de Barcelona cuesta USD 150");
    break;
  case "4" :
    alert("La camiseta de Liverpol cuesta USD 125");
    break;
  case "5" :
    alert("La camiseta de A. Madrid cuesta USD 100");
    break;
  case "6" :
    alert("La camiseta de Ajax cuesta USD 75");
    break;
  default:
    alert("No coincide numero con camisetas disponibles");
    break;
}
function calcularIva(precio) {
    let totalSinIva= precio * 0.79;
    alert("El precio sin iva es de: $ "+ totalSinIva)
}
alert("Te hacemos descuento del IVA por primera compra")
let compra = prompt("Entonces vas a comprar la de: 1-Nacional, 2-Uruguay, 3-Barcelona, 4-Liverpool, 5-A.Madrid, 6-Ajax")
switch (compra) {
    case "1":
      calcularIva(200);
      break;
    case "2":
      calcularIva(175);
      break;
    case "3" :
      calcularIva(150);
      break;
    case "4" :
      calcularIva(125);
      break;
    case "5" :
      calcularIva(100);
      break;
    case "6" :
      calcularIva(75);
      break;
    default:
      alert("No coincide numero con camisetas disponibles");
      break;}
