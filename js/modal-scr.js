 !function(t){t.fn.hoverscroll=function(o){return o||(o={}),o=t.extend({},t.fn.hoverscroll.params,o),this.each(function(){var e=t(this);o.debug&&t.log("[HoverScroll] Trying to create hoverscroll on element "+this.tagName+"#"+this.id),o.fixedArrows?e.wrap('<div class="fixed-listcontainer"></div>'):e.wrap('<div class="listcontainer"></div>'),e.addClass("list");var r=e.parent();r.wrap('<div class="ui-widget-content hoverscroll'+(o.rtl&&!o.vertical?" rtl":"")+'"></div>');var s,a,d,n,h=r.parent();o.arrows&&(o.vertical?o.fixedArrows?(d='<div class="fixed-arrow top"></div>',n='<div class="fixed-arrow bottom"></div>',r.before(d).after(n)):(d='<div class="arrow top"></div>',n='<div class="arrow bottom"></div>',r.append(d).append(n)):o.fixedArrows?(s='<div class="fixed-arrow left"></div>',a='<div class="fixed-arrow right"></div>',r.before(s).after(a)):(s='<div class="arrow left"></div>',a='<div class="arrow right"></div>',r.append(s).append(a))),h.width(o.width).height(o.height),o.arrows&&o.fixedArrows?o.vertical?(d=r.prev(),n=r.next(),r.width(o.width).height(o.height-(d.height()+n.height()))):(s=r.prev(),a=r.next(),r.height(o.height).width(o.width-(s.width()+a.width()))):r.width(o.width).height(o.height);var c=0;o.vertical?(h.addClass("vertical"),e.children().each(function(){t(this).addClass("item"),t(this).outerHeight?c+=t(this).outerHeight(!0):c+=t(this).height()+parseInt(t(this).css("padding-top"))+parseInt(t(this).css("padding-bottom"))+parseInt(t(this).css("margin-bottom"))+parseInt(t(this).css("margin-bottom"))}),e.height(c),o.debug&&t.log("[HoverScroll] Computed content height : "+c+"px"),c=h.outerHeight?h.outerHeight():h.height()+parseInt(h.css("padding-top"))+parseInt(h.css("padding-bottom"))+parseInt(h.css("margin-top"))+parseInt(h.css("margin-bottom")),o.debug&&t.log("[HoverScroll] Computed container height : "+c+"px")):(h.addClass("horizontal"),e.children().each(function(){t(this).addClass("item"),t(this).outerWidth?c+=t(this).outerWidth(!0):c+=t(this).width()+parseInt(t(this).css("padding-left"))+parseInt(t(this).css("padding-right"))+parseInt(t(this).css("margin-left"))+parseInt(t(this).css("margin-right"))}),e.width(c),o.debug&&t.log("[HoverScroll] Computed content width : "+c+"px"),c=h.outerWidth?h.outerWidth():h.width()+parseInt(h.css("padding-left"))+parseInt(h.css("padding-right"))+parseInt(h.css("margin-left"))+parseInt(h.css("margin-right")),o.debug&&t.log("[HoverScroll] Computed container width : "+c+"px"));var l={1:{action:"move",from:0,to:.06*c,direction:-1,speed:16},2:{action:"move",from:.06*c,to:.15*c,direction:-1,speed:8},3:{action:"move",from:.15*c,to:.25*c,direction:-1,speed:4},4:{action:"move",from:.25*c,to:.4*c,direction:-1,speed:2},5:{action:"stop",from:.4*c,to:.6*c},6:{action:"move",from:.6*c,to:.75*c,direction:1,speed:2},7:{action:"move",from:.75*c,to:.85*c,direction:1,speed:4},8:{action:"move",from:.85*c,to:.94*c,direction:1,speed:8},9:{action:"move",from:.94*c,to:c,direction:1,speed:16}};function p(){if(o.arrows&&!o.fixedArrows){var i,e;o.vertical?(i=r[0].scrollHeight-r.height(),e=r[0].scrollTop):(i=r[0].scrollWidth-r.width(),e=r[0].scrollLeft);var s=o.arrowsOpacity,a=e/i*s;a>s&&(a=s),isNaN(a)&&(a=0);var d=!1;a<=0&&(t("div.arrow.left, div.arrow.top",h).hide(),i>0&&t("div.arrow.right, div.arrow.bottom",h).show().css("opacity",s),d=!0),(a>=s||i<=0)&&(t("div.arrow.right, div.arrow.bottom",h).hide(),d=!0),d||(t("div.arrow.left, div.arrow.top",h).show().css("opacity",a),t("div.arrow.right, div.arrow.bottom",h).show().css("opacity",s-a))}}function g(i,e){h[0].direction!=i&&(o.debug&&t.log("[HoverScroll] Starting to move. direction: "+i+", speed: "+e),v(),h[0].direction=i,h[0].isChanging=!0,function t(){if(0==h[0].isChanging)return;p();var i;i=o.vertical?"scrollTop":"scrollLeft";r[0][i]+=h[0].direction*h[0].speed;h[0].timer=setTimeout(function(){t()},50)}()),h[0].speed!=e&&(o.debug&&t.log("[HoverScroll] Changed speed: "+e),h[0].speed=e)}function v(){h[0].isChanging&&(o.debug&&t.log("[HoverScroll] Stoped moving"),h[0].isChanging=!1,h[0].direction=0,h[0].speed=1,clearTimeout(h[0].timer))}h[0].isChanging=!1,h[0].direction=0,h[0].speed=1,o.rtl&&!o.vertical&&(r[0].scrollLeft=r[0].scrollWidth-r.width()),h.mousemove(function(t){!function(t,e){var r;for(i in t-=h.offset().left,e-=h.offset().top,r=o.vertical?e:t,l)r>=l[i].from&&r<l[i].to&&("move"==l[i].action?g(l[i].direction,l[i].speed):v())}(t.pageX,t.pageY)}).bind("mouseleave",function(){v()}),this.startMoving=g,this.stopMoving=v,o.arrows&&!o.fixedArrows?p():t(".arrowleft, .arrowright, .arrowtop, .arrowbottom",h).hide()}),this},t.fn.offset||(t.fn.offset=function(){if(this.left=this.top=0,this[0]&&this[0].offsetParent){var t=this[0];do{this.left+=t.offsetLeft,this.top+=t.offsetTop}while(t=t.offsetParent)}return this}),t.fn.hoverscroll.params={vertical:!1,width:400,height:50,arrows:!0,arrowsOpacity:.7,fixedArrows:!1,rtl:!1,debug:!1},t.log=function(){try{console.log.apply(console,arguments)}catch(t){try{opera.postError.apply(opera,arguments)}catch(t){}}}}(jQuery);

  $(document).ready(function() {

  $(".img-slider-small").on("click", function() {
    $(".img-box-child").removeClass("active");
    $(this).parent().addClass("active");
    var targetSrc = $(this).attr("src");
     $(".img-big-display")
        .fadeOut(400, function() {
            $(".img-big-display").attr('src',targetSrc);
        })
        .fadeIn(400);
  });
  if($('#my-list').length) {
    $.fn.hoverscroll.params = $.extend($.fn.hoverscroll.params, {
      vertical : true,
      width: 67,
      height: 300,
      arrows: false
    });
    $('#my-list').hoverscroll();
  }

  //Image Modal Large
  $(".img-big-display").on("click", function() {
    var srcValue = $(this).attr("src");
    $("#modalBodyLightBox").html('<div class="cls_preloader"><i class="fa fa-spin fa-spinner fa-3x"></i></div>');
     $("#myModalLightbox").modal({ backdrop: 'static', keyboard: false});
    $("#myModalLightbox").modal("show");
    $("#modalBodyLightBox").html('<img src="'+srcValue+'" class="img-lightbox">');
  });

  /*$(".close").on("click", function() {
    $("#myModalLightbox").modal("hide");
  });*/

  $(".left-slider-img").on("click", function() {
    if($(".img-box-child.active").prev().hasClass('img-box-child')) {
      var el = $(".img-box-child.active");
     var srcElem = $(el).prev().find(".img-slider-small").attr("src"); //, "red" );
     $("#modalBodyLightBox").html('<img src="'+srcElem+'" class="img-lightbox">');
      $(".img-box-child.active").removeClass("active");
      $(el).prev().addClass("active");
    }
  });

  $(".right-slider-img").on("click", function() {
    if($(".img-box-child.active").next().hasClass('img-box-child')) {
      var el = $(".img-box-child.active");
     var srcElem = $(el).next().find(".img-slider-small").attr("src"); //, "red" );
     $("#modalBodyLightBox").html('<img src="'+srcElem+'" class="img-lightbox">');
      $(".img-box-child.active").removeClass("active");
      $(el).next().addClass("active");
    }
  });

  //Image Modal large

});

