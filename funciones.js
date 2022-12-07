// Funcion para el menu responsive
$("#menu").click(function () {
  $("#contenedormenu").slideToggle();
});
//SLIDE
$(function () {
  $("#slider4").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });
});

//ANIMACIONES
new WOW().init();

//CARRUCEL
$(document).ready(function()
{
  $('#slider1').tinycarousel();
});

 //ACORDEON
 $(".titulo1").click(function(){
  $(".contenido1").slideToggle();
  $(".icono1").toggleClass("rotar");
});

$(".titulo2").click(function(){
  $(".contenido2").slideToggle();
  $(".icono2").toggleClass("rotar");
});

$(".titulo3").click(function(){
  $(".contenido3").slideToggle();
  $(".icono3").toggleClass("rotar");
});
$(".titulo4").click(function(){
  $(".contenido4").slideToggle();
  $(".icono4").toggleClass("rotar");
});

$(".titulo5").click(function(){
  $(".contenido5").slideToggle();
  $(".icono5").toggleClass("rotar");
});

//FUNCION SUBIR
$(document).ready(function () {
  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});

// Funcion para desplazamiento de los vinculos
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  );
  $("#contenedormenu").toggleClass("abrirmenu");
});

//MODAL
var fondomodal = document.getElementById("modal");
var btn = document.getElementById("Btn");
var cerrar = document.getElementById("cerrarbtn");

btn.onclick = function () {
  fondomodal.style.display = "block";
};
cerrar.onclick = function () {
  fondomodal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == fondomodal) {
    fondomodal.style.display = "none";
  }
};

