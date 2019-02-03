  var contInterval=null;

//Efecto letras

var txtMezclar = $("#txtMezclar");

        setTimeout(function(){
              txtMezclar.shuffleLetters().css({

                opacity: "10",
                 });

     }, 1000);




$('.container').tubular({videoId: 'eV4AyIpnpcI'});


var cont=0;


//boton voz

var contVoz=0;

$("#volum").click(function(e){

    contVoz++;

    if(contVoz%2==0){
        $("#volum").empty().html('<span class="fa fa-volume-up fa-4x"></span>');
        $('#audioFondo').html('<audio autoplay><source src="reloj.mp3"></audio>');
    }
    else{
         $("#volum").empty().html('<span class="fa fa-volume-off fa-4x"></span>');
         $("#audioFondo").empty();
    }

});


//CURSOR ENTRA


$( "#asia" ).mouseenter(function() {

    if(cont==0){
    $(".mapa").attr("src","images/asiamap.png");
    $('#select').css("display","block").addClass("slideLeft");
    $('#selectText').html("ASIA");
    if(contVoz%2==0){
        $("#audio").empty();
        $('#audio').html('<audio autoplay><source src="boton.mp3"></audio>');
    }

    }

});


$( "#oceania" ).mouseenter(function() {

    if(cont==0){
    $(".mapa").attr("src","images/oceaniamap.png");
    $('#select').css("display","block").addClass("slideDown");
    $('#selectText').html("OCEANIA");

    if(contVoz%2==0){
        $("#audio").empty();
        $('#audio').html('<audio autoplay><source src="boton.mp3"></audio>');
    }

    }
});

$( "#europe" ).mouseenter(function() {

    if(cont==0){
    $(".mapa").attr("src","images/europemap.png");
    $('#select').css("display","block").addClass("slideUp");
    $('#selectText').html("EUROPE");

    if(contVoz%2==0){
        $("#audio").empty();
        $('#audio').html('<audio autoplay><source src="boton.mp3"></audio>');
    }

    }
});

$( "#africa" ).mouseenter(function() {
    if(cont==0){
    $(".mapa").attr("src","images/africamap.png");
    $('#select').css("display","block").addClass("slideDown");
    $('#selectText').html("AFRICA");

    if(contVoz%2==0){
        $("#audio").empty();
        $('#audio').html('<audio autoplay><source src="boton.mp3"></audio>');
    }

    }
});

$( "#southamerica" ).mouseenter(function() {
    if(cont==0){
    $(".mapa").attr("src","images/southamericamap.png");
    $('#select').css("display","block").addClass("slideDown");
    $('#selectText').html("SOUTH AMERICA");

    if(contVoz%2==0){
        $("#audio").empty();
        $('#audio').html('<audio autoplay><source src="boton.mp3"></audio>');
    }

    }
});

$( "#america" ).mouseenter(function() {

    if(cont==0){
    $(".mapa").attr("src","images/northamericamap.png");
    $('#select').css("display","block").addClass("slideUp");
    $('#selectText').html("NORTH AMERICA");

    if(contVoz%2==0){
        $("#audio").empty();
        $('#audio').html('<audio autoplay><source src="boton.mp3"></audio>');
    }

    }

});



$("#select").mouseenter(function(){

      $('#select').css("display","block");
});



//CURSOR SALE


$( "#asia" ).mouseleave(function() {

    if(cont==0){
    $(".mapa").attr("src","images/map1.png");
    $("#audio").empty();
    $('#select').css("display","none").removeClass();
    }
});


$( "#oceania" ).mouseleave(function() {
    if(cont==0){
    $(".mapa").attr("src","images/map1.png");
    $("#audio").empty();
    $('#select').css("display","none").removeClass();
    }
});

$( "#europe" ).mouseleave(function() {
    if(cont==0){
    $(".mapa").attr("src","images/map1.png");
    $("#audio").empty();
    $('#select').css("display","none").removeClass();    ;
    }
});

$( "#africa" ).mouseleave(function() {
    if(cont==0){
    $(".mapa").attr("src","images/map1.png");
    $("#audio").empty();
    $('#select').css("display","none").removeClass();
    }
});

$( "#southamerica" ).mouseleave(function() {
    if(cont==0){
    $(".mapa").attr("src","images/map1.png");
    $("#audio").empty();
    $('#select').css("display","none").removeClass();
    }
});

$( "#america" ).mouseleave(function() {
    if(cont==0){
    $(".mapa").attr("src","images/map1.png");
    $("#audio").empty();
    $('#select').css("display","none");
    }
});


  //CLICAR EN EL TEXTO


$( "#selectText" ).on("click",function() {

    var text = $("#selectText").html();
    switch(text){
        case "OCEANIA":
            oceania();
            break;
        case "ASIA":
            asia();
            break;
        case "AFRICA":
            africa();
            break;
        case "EUROPE":
            europe();
            break;
        case "SOUTH AMERICA":
            southAmerica();
            break;
        case "NORTH AMERICA":
            northAmerica();
            break;
    }

});

//CLICAR EN EL MAPA

$( "#africa" ).on("click",function() {

    africa();

     });


$( "#america" ).on("click",function() {

    northAmerica();

     });


$( "#southamerica" ).on("click",function() {

   southAmerica();

     });


 $( "#europe" ).on("click",function() {

       europe();
     });


$( "#asia" ).on("click",function() {

    asia();

     });


$( "#oceania" ).on("click",function() {

    oceania();

     });


     //VOLVER


$( "#returnArrow" ).on("click",function() {

    cont=0;
     $('#returnArrow').css("display","none");
     $('.reloOce').css("display","none");
     $('.reloSouth').css("display","none");
     $('.reloAfrica').css("display","none");
     $('.reloEurope').css("display","none");
     $('.reloNorth').css("display","none");
     $('.reloAsia').css("display","none");
     $('#volum').css("display","block").addClass("slideRight");

     $(".mapa").attr("src","images/map1.png").attr("usemap","#globotmap").css("margin-top","-20px").css("margin-left","0px");


     });

