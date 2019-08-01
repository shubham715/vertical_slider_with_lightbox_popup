<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 4 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link type="text/css" rel="stylesheet" href="css/modal-style.css" />
</head>
<body>


<div class="container">
  <div class="row-fixed-height">
     <div class="thumb-container">
        <div class="sliderbox-n">

          <div class="sliderbox-child-n">
          <ul id="my-list">
            <li class="img-box-child active"><img class="img-slider-small" src="img/1.png" /></li>
            <li class="img-box-child"><img class="img-slider-small" src="img/2.jpg"  /></li>
            <li class="img-box-child"><img class="img-slider-small" src="img/3.jpg" /></li>
            <li class="img-box-child"><img class="img-slider-small" src="img/4.jpg" /></li>
            <li class="img-box-child"><img class="img-slider-small" src="img/5.png" /></li>
            <li class="img-box-child"><img class="img-slider-small" src="img/6.jpg" /></li>
          </ul>
        </div>
        </div>
     </div>
     <div class=" display-container">
        <div class="displayImageBox"><img class="img img-fluid img-big-display" src="img/1.png"></div></div>
     </div>
  </div>
</div>

<!-- MODAL POPUP TO SHOW IMAGE IN LIGHTBOX -->
 <div class="modal fade" id="myModalLightbox">
       <div class="cancel-btn-modal"><button type="button" class="close" data-dismiss="modal">&times;</button></div> 
       <div class="nav-lightbox left-slider-img"> < </div>
       <div class="nav-lightbox right-slider-img"> > </div>
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body" id="modalBodyLightBox">          
          <img src="" id="modalBoxImg">
        </div>
      </div>
    </div>
 </div>
</div>
<!-- MODAL POPUP ENDS HERE -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/modal-scr.js"></script>
</body>
</html>

