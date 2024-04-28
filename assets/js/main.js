jQuery(function($){"use strict";$(window).on("load",function(){$(".loader-blob").fadeOut(),$("#preloader").delay(300).fadeOut("slow",function(){$(this).remove()})})
$(".header_search").each(function(){$(".search_btn",this).on("click",function(e){e.preventDefault();$(".header_search_content").toggleClass("on");});$(".header_search_content_inner .close_btn").on("click",function(e){e.preventDefault();$(".header_search_content").removeClass("on");});});$(window).on("scroll",function(){if(matchMedia('only screen and (min-width: 1200px)').matches)
{if($(window).scrollTop()>=50){$('.yv-stickable-header').addClass('fixed-header');}
else{$('.yv-stickable-header').removeClass('fixed-header');}}});var menu={initialize:function(){this.Menuhover();},Menuhover:function(){var getNav=$("nav.main-menu"),getWindow=$(window).width(),getHeight=$(window).height(),getIn=getNav.find("ul.menu").data("in"),getOut=getNav.find("ul.menu").data("out");if(matchMedia('only screen and (max-width: 1200px)').matches){$("nav.main-menu ul.menu").each(function(){$("a.mega-menu-link",this).on('click',function(e){e.preventDefault();var t=$(this);t.toggleClass('active').next('ul').toggleClass('active');});$(".megamenu-fw",this).each(function(){$(".col-menu",this).each(function(){$(".title",this).off("click");$(".title",this).on("click",function(){$(this).closest(".col-menu").find(".content").stop().toggleClass('active');$(this).closest(".col-menu").toggleClass("active");return false;e.preventDefault();});});});});}},};$('.btn-show-menu-mobile').on('click',function(e){$(this).toggleClass('is-active');$('.menu-mobile').toggleClass('show');return false;e.preventDefault();});$(document).ready(function(){menu.initialize();});var date=new Date().getFullYear();$('#date').html(date);$('.banner_slider').slick({slidesToShow:1,slidesToScroll:1,autoplay:true,autoplaySpeed:4000,arrows:true,dots:false,adaptiveHeight:true,responsive:[{breakpoint:1200,settings:{arrows:false}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,autoplay:true,autoplaySpeed:4000,swipe:true}}]});$("[data-appear-animation]").each(function(){var self=$(this);var animation=self.data("appear-animation");var delay=(self.data("appear-animation-delay")?self.data("appear-animation-delay"):0);if($(window).width()>959){self.html('0');self.waypoint(function(direction){if(!self.hasClass('completed')){var from=self.data('from');var to=self.data('to');var interval=self.data('interval');self.numinate({format:'%counter%',from:from,to:to,runningInterval:2000,stepUnit:interval,onComplete:function(elem){self.addClass('completed');}});}},{offset:'85%'});}else{if(animation=='animateWidth'){self.css('width',self.data("width"));}}});$('.yv-progress-bar').each(function(){$(this).find('.progress-bar').width(0);});$('.yv-progress-bar').each(function(){$(this).find('.progress-bar').animate({width:$(this).attr('data-percent')},2000);});$('.progress-bar-percent[data-percentage]').each(function(){var progress=$(this);var percentage=Math.ceil($(this).attr('data-percentage'));$({countNum:0}).animate({countNum:percentage},{duration:2000,easing:'linear',step:function(){var pct='';if(percentage==="0"){pct=Math.floor(this.countNum)+'%';}else{pct=Math.floor(this.countNum+1)+'%';}
progress.text(pct);}});});$('.yv-tabs > .tabs').children('li').on('click',function(e){var tab=$(this).closest('.yv-tabs > .tabs > .tab'),index=$(this).closest('.yv-tabs > .tabs > li').index();$(this).parents('.yv-tabs').children('.tabs').children('li.active ').removeClass('active');$(this).addClass('active');$(this).addClass('active').parents('.yv-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq('+index+')').slideUp();$(this).addClass('active').parents('.yv-tabs').children('.content-tab').find('.content-inner:eq('+index+')').slideDown();e.preventDefault();});$(function(){jQuery(".img-fluid:not(.alignleft, .alignright, .slider_arrow, .auto_size)").attr("height","100%")});$(function(){jQuery(".img-fluid:not(.alignleft, .alignright, .slider_arrow, .auto_size)").attr("width","100%")});$(function(){if($().isotope){var $container=$('.isotope-project');$container.imagesLoaded(function(){$container.isotope({itemSelector:'',transitionDuration:'1s',});});$('.portfolio-filter li').on('click',function(){var selector=$(this).find("a").attr('data-filter');$('.portfolio-filter li').removeClass('active');$(this).addClass('active');$container.isotope({filter:selector});return false;});};});$(function(){$('.work-gallery').magnificPopup({delegate:'.gallery-image',type:'image',});$('.video-btn').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});});$(".slick_slider").slick({speed:1000,infinite:true,arrows:false,dots:false,autoplay:false,centerMode:false,responsive:[{breakpoint:1360,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:680,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".portfolio_slider").slick({slidesToShow:4,slidesToScroll:1,arrows:false,autoplay:false,infinite:true,responsive:[{breakpoint:1400,settings:{slidesToShow:4}},{breakpoint:1204,settings:{slidesToShow:3}},{breakpoint:777,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1}}]});$(".blog_slider").slick({slidesToShow:3,slidesToScroll:1,arrows:false,dots:false,autoplay:true,infinite:true,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1}}]});$(".team_slider").slick({slidesToShow:4,slidesToScroll:1,arrows:false,dots:false,autoplay:true,infinite:true,responsive:[{breakpoint:1100,settings:{slidesToShow:3}},{breakpoint:777,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1}}]});$(".service_slider").slick({slidesToShow:3,slidesToScroll:1,arrows:false,autoplay:false,dots:false,infinite:true,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:840,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1}}]});$(".testimonial_slider").slick({slidesToShow:1,slidesToScroll:1,arrows:false,autoplay:false,dots:false,infinite:true,responsive:[{breakpoint:992,settings:{slidesToShow:1}},{breakpoint:840,settings:{slidesToShow:1}},{breakpoint:650,settings:{slidesToShow:1}}]});$(".testimonial2_slider").slick({slidesToShow:3,slidesToScroll:1,arrows:true,centerMode:true,centerPadding:0,autoplay:false,dots:false,infinite:true,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:840,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1}}]});$(".client_slider").slick({slidesToShow:5,slidesToScroll:1,arrows:false,autoplay:false,infinite:true,responsive:[{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:777,settings:{slidesToShow:3}},{breakpoint:575,settings:{slidesToShow:2}},{breakpoint:400,settings:{slidesToShow:1}}]});jQuery('#totop').hide();$(window).on("scroll",function(){if(jQuery(this).scrollTop()>=500){jQuery('#totop').fadeIn(200);jQuery('#totop').addClass('top-visible');}else{jQuery('#totop').fadeOut(200);jQuery('#totop').removeClass('top-visible');}});jQuery('#totop').on("click",function(){jQuery('body,html').animate({scrollTop:0},500);return false;});});