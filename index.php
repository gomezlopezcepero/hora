<html>

<?php
        include 'includes/docheader.php';
    ?>

<body>


<div class="container">

                  <?php
                include 'includes/siteheader.php';
                ?>

        <img usemap="#globotmap" class="mapa" src="images/map1.png" alt="" />


        <map name="globotmap">
            <area target="" id="southamerica" alt="southamerica" title="southamerica" coords="209,358,390,592,442,585" shape="rect">
            <area target="" id="africa" alt="africa" title="africa" coords="433,276,530,269,588,291,637,355,686,347,636,513,435,516" shape="poly">
            <area target="" id="america" alt="america" title="america" coords="199,359,123,326,83,186,2,182,6,40,289,0,466,8,456,100,423,143,351,218,334,245,300,270,307,298,313,340,308,355,284,354,264,346,250,361" shape="poly">
            <area target="" id="europe" alt="europe" title="europe" coords="435,272,424,147,451,123,505,55,550,25,600,12,630,13,653,52,646,111,658,232,618,253,599,281,593,287,535,265,478,276" shape="poly">
            <area target="" id="oceania" alt="oceania" title="oceania" coords="949,388,944,424,902,426,851,437,827,464,890,578,1045,585,1045,381" shape="poly">
            <area target="" id="asia" alt="asia" title="asia" coords="591,288,658,226,652,15,1036,10,944,392,935,418,827,443,683,345,637,354,594,293" shape="poly">
        </map>

<div id="select"><h3 id="selectText"></h3></div>

<!--OCEANIA-->

<div  class="reloOce reloj" id="oce1">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(1);"  type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloOce  reloj" id="oce2">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(2);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloOce  reloj" id="oce3">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(3);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloOce  reloj" id="oce4">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(4);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<!--SOUTHAMERICA-->

<div  class="reloSouth  reloj" id="south1">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(5);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloSouth  reloj" id="south2">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(6);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloSouth  reloj" id="south3">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(7);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloSouth  reloj" id="south4">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(8);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>


<!--AFRICA-->

<div  class="reloAfrica  reloj" id="africa1">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(9);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAfrica  reloj" id="africa2">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(10);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAfrica  reloj" id="africa3">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(11);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAfrica  reloj" id="africa4">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(12);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAfrica  reloj" id="africa5">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(13);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>


<!--  EUROPE -->


<div  class="reloEurope  reloj" id="europe1">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(14);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloEurope  reloj" id="europe2">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(15);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloEurope  reloj" id="europe3">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(16);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloEurope  reloj" id="europe4">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(17);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>



<!--  NORTH AMERICA -->


<div  class="reloNorth  reloj" id="north1">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(19);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloNorth reloj" id="north2">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(20);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloNorth reloj" id="north3">
  <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(21);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloNorth reloj" id="north4">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(22);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloNorth reloj" id="north5">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(23);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloNorth reloj" id="north6">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(24);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloNorth reloj" id="north7">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(25);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>


<!-- ASIA -->

<div  class="reloAsia reloj" id="asia1">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(26);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAsia reloj" id="asia2">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(27);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAsia reloj" id="asia3">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(28);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAsia reloj" id="asia4">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(29);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAsia reloj" id="asia5">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(30);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAsia reloj" id="asia6">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(31);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAsia reloj" id="asia7">
    <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(32);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<div  class="reloAsia reloj" id="asia8">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(33);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>


<div  class="reloAsia reloj" id="asia10">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(35);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>


<div  class="reloAsia reloj" id="asia12">
   <input data-toggle="modal" data-target="#myModal" onClick="modalReloj(37);" type="image" src="images/reloj.png">
    <h3 class="relojText">00:00</h3>
</div>

<!--VOLVER-->

<div id="volum" class="slideRight" data-toggle="tooltip" title="Activar o desactivar sonido">
<span  class="fa fa-volume-up fa-4x" style="color:white"></span>
</div>
<input id="returnArrow" type="image" src="images/flechaVolver.png">
</div>


<!--MODAL-->

<div  id="myModal" class="modal fade" role="dialog">
  <div style="width:615px; margin-top:13%;" class="modal-dialog">

    <!-- Modal content-->
    <div style=" background-color: rgba(10, 0, 0, 0.3)" class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h2 align="center" class="modal-title">Nuevo chiste</h2>
      </div>
      <div class="modal-body">

           <h3 align="center"></h3>


      </div>
      <div class="modal-footer">

    </div>

  </div>
  </div>
</div>

<span id="audio"></span>

<span id="audioFondo">
 <audio autoplay loop>
    <source src="reloj.mp3" type="audio/mpeg">
</audio>
   </span>


</body>



    <?php
        include 'includes/sitefooter.php';
    ?>










</html>