function validarLogin(event) {
  event.preventDefault(); // Evita que la página se recargue

  let usuario = document.getElementById("username").value;
  let contrasena = document.getElementById("password").value;

  if (usuario === "admin" && contrasena === "1234") {
    alert("Inicio de sesión exitoso ✅");
    window.location.href = "dashboard.html"; // Redirige a otra página
  } else {
    alert("Usuario o contraseña incorrectos ❌");
  }
}
