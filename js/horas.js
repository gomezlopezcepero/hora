

function africa(){


    cont=1;
     $(".mapa").attr("src","images/africa.png").attr("usemap","");
     $('#select').css("display","none");
     $('#returnArrow').css("display","block").addClass("slideRight");
     $('#volum').css("display","none");
     $('.reloAfrica').css("display","block");

     var d = new Date();
     var h = d.getUTCHours();
     var m = d.getUTCMinutes();

     if(m<10){
     m = "0" + m;
     }

     var africa4= h+2;
     var africa3= h +3;
     var africa2= h +1;
     var africa1= h;
     var dif=0;

     if(africa3>23){
     dif= africa3-24;
     africa3=0;
     africa3= africa3 +dif;
     }

      if(africa2>23){
     dif= africa2-24;
     africa2=0;
     africa2= africa2 +dif;
     }

     if(africa4>23){
     dif= africa4-24;
     africa4=0;
     africa4= africa4 +dif;
     }



     $("#africa5 h3").html(africa4+":"+m);
     $("#africa4 h3").html(africa4+":"+m);
     $("#africa3 h3").html(africa3+":"+m);
     $("#africa2 h3").html(africa2+":"+m);
     $("#africa1 h3").html(africa1+":"+m);

}


function oceania(){

    cont=1;
     $(".mapa").attr("src","images/oceania.png").attr("usemap","");
     $('#select').css("display","none");
     $('#returnArrow').css("display","block").addClass("slideRight");
     $('#volum').css("display","none");
     $('.reloOce').css("display","block");

     var d = new Date();
     var h = d.getUTCHours();
     var m = d.getUTCMinutes();

      if(m<10){
     m = "0" + m;
     }


     oce1 = h+9;
     oce3 = h+10;
     oce4 = h+12;

     var dif=0;


     if(oce4>23){
     dif= oce4-24;
     oce4=0;
     oce4= oce4 +dif;
     }

      if(oce3>23){
     dif= oce3-24;
     oce3=0;
     oce3= oce3 +dif;
     }

     if(oce1>23){
     dif= oce1-24;
     oce1=0;
     oce1= oce1 +dif;
     }


      $("#oce4 h3").html(oce4+":"+m);
     $("#oce3 h3").html(oce3+":"+m);
     $("#oce1 h3").html(oce1+":"+m);


}


function europe(){


    cont=1;
     $(".mapa").attr("src","images/europe.png").attr("usemap","").css("margin-top","-100px").css("margin-left","80px");
     $('#select').css("display","none");
     $('#returnArrow').css("display","block").addClass("slideRight");
     $('#volum').css("display","none");
      $('.reloEurope').css("display","block");

     var d = new Date();
     var h = d.getUTCHours();
     var m = d.getUTCMinutes();

      if(m<10){
     m = "0" + m;
     }

     var europe4= h +2;
     var europe3= h +3;
     var europe2= h +1;
     var europe1= h;
     var dif=0;

     if(europe3>23){
     dif= europe3-24;
     europe3=0;
     europe3= europe3 +dif;
     }

      if(europe2>23){
     dif= europe2-24;
     europe2=0;
     europe2= europe2 +dif;
     }

     if(europe4>23){
     dif= europe4-24;
     europe4=0;
     europe4= europe4 +dif;
     }

     $("#europe4 h3").html(europe4+":"+m);
     $("#europe3 h3").html(europe3+":"+m);
     $("#europe2 h3").html(europe2+":"+m);
     $("#europe1 h3").html(europe1+":"+m);

}


function asia(){

     cont=1;
     $(".mapa").attr("src","images/asia.png").attr("usemap","").css("margin-top","-100px").css("margin-left","80px");
     $('#select').css("display","none");
     $('#returnArrow').css("display","block").addClass("slideRight");
     $('#volum').css("display","none");
     $('.reloAsia').css("display","block");


     var d = new Date();
     var h = d.getUTCHours();
     var m = d.getUTCMinutes();

      if(m<10){
     m = "0" + m;
     }

     var asia1= h +12;
     var asia2= h +10;
     var asia3= h +9;
     var asia4= h +8;
     var asia5= h +5;
     var asia6= h +6;
     var asia7= h +3;
     var asia8= h +5;
     var asia10= h +7;
     var asia12= h +4;
     var dif=0;

     if(asia1>23){
     dif= asia1-24;
     asia1=0;
     asia1= asia1 +dif;
     }

     if(asia2>23){
     dif= asia2-24;
     asia2=0;
     asia2= asia2 +dif;
     }

     if(asia3>23){
     dif= asia3-24;
     asia3=0;
     asia3= asia3 +dif;
     }

     if(asia4>23){
     dif= asia4-24;
     asia4=0;
     asia4= asia4 +dif;
     }

     if(asia5>23){
     dif= asia5-24;
     asia5=0;
     asia5= asia5 +dif;
     }

     if(asia6>23){
     dif= asia6-24;
     asia6=0;
     asia6= asia6 +dif;
     }

     if(asia7>23){
     dif= asia7-24;
     asia7=0;
     asia7= asia7 +dif;
     }

     if(asia8>23){
     dif= asia8-24;
     asia8=0;
     asia8= asia8 +dif;
     }


     if(asia10>23){
     dif= asia10-24;
     asia10=0;
     asia10= asia10 +dif;
     }



     if(asia12>23){
     dif= asia12-24;
     asia12=0;
     asia12= asia12 +dif;
     }

     $("#asia12 h3").html(asia12+":"+m);
     $("#asia10 h3").html(asia10+":"+m);
     $("#asia8 h3").html(asia8+":"+m);
     $("#asia7 h3").html(asia7+":"+m);
     $("#asia6 h3").html(asia6+":"+m);
     $("#asia5 h3").html(asia5+":"+m);
     $("#asia4 h3").html(asia4+":"+m);
     $("#asia3 h3").html(asia3+":"+m);
     $("#asia2 h3").html(asia2+":"+m);
     $("#asia1 h3").html(asia1+":"+m);

}


function northAmerica(){

    cont=1;
     $(".mapa").attr("src","images/northamerica.png").attr("usemap","").css("margin-top","-100px").css("margin-left","80px");
     $('#select').css("display","none");
     $('#returnArrow').css("display","block").addClass("slideRight");
     $('#volum').css("display","none");
     $('.reloNorth').css("display","block");

     var d = new Date();
     var h = d.getUTCHours();
     var m = d.getUTCMinutes();

      if(m<10){
     m = "0" + m;
     }

     var north7= h -9;
     var north6= h -8;
     var north5= h -7;
     var north4= h -5;
     var north3= h -4;
     var north2= h -6;
     var north1= h -3;
     var dif=0;

     if(north1<0){
     dif= north1+24;
     north1=0;
     north1= north1 +dif;
     }

     if(north2<0){
     dif= north2+24;
     north2=0;
     north2= north2 +dif;
     }

     if(north3<0){
     dif= north3+24;
     north3=0;
     north3= north3 +dif;
     }

     if(north4<0){
     dif= north4+24;
     north4=0;
     north4= north4 +dif;
     }

     if(north5<0){
     dif= north5+24;
     north5=0;
     north5= north5 +dif;
     }

     if(north6<0){
     dif= north6+24;
     north6=0;
     north6= north6 +dif;
     }

     if(north7<0){
     dif= north7+24;
     north7=0;
     north7= north7 +dif;
     }


     $("#north7 h3").html(north7+":"+m);
     $("#north6 h3").html(north6+":"+m);
     $("#north5 h3").html(north5+":"+m);
     $("#north4 h3").html(north4+":"+m);
     $("#north3 h3").html(north3+":"+m);
     $("#north2 h3").html(north2+":"+m);
     $("#north1 h3").html(north1+":"+m);


}

function southAmerica(){

     cont=1;
     $(".mapa").attr("src","images/southamerica.png").attr("usemap","");
     $('#select').css("display","none");
     $('#returnArrow').css("display","block").addClass("slideRight");
     $('#volum').css("display","none");
     $('.reloSouth').css("display","block");

     var d = new Date();
     var h = d.getUTCHours();
     var m = d.getUTCMinutes();

      if(m<10){
     m = "0" + m;
     }

     var south3= h -3;
     var south2= h -4;
     var south1= h -5;
     var dif=0;

     if(south3<0){
     dif= south3+24;
     south3=0;
     south3= south3 +dif;
     }

      if(south2<0){
     dif= south2+24;
     south2=0;
     south2= south2 +dif;
     }

     if(south1<0){
     dif= south1+24;
     south1=0;
     south1= south1 +dif;
     }

     $("#south3 h3").html(south3+":"+m);
     $("#south2 h3").html(south2+":"+m);
     $("#south1 h3").html(south1+":"+m);

}
