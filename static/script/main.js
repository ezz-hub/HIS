box2 =document.getElementById("box2");
box3 =document.getElementById("box3");

window.onload =function(){
    setTimeout(function(){
        box2.style.visibility='visible';
        box2.classList.add("animate__zoomIn")
    },1000);
    setTimeout(function(){
        box3.style.visibility='visible';
        box3.classList.add("animate__zoomIn")
    },2000);
}
$(function(){
    'use strict';
    $('[placeholder]').focus(function(){
        $(this).attr('data-text',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    }).blur(function(){
        $(this).attr('placeholder',$(this).attr('data-text'));
    });
    $('input').each(function(){    //add asterisk
        if($(this).attr('required')==='required'){
            $(this).after("<span class='asterisk'> * </span>");
        }
    }); 
    var show_field = $(".password");
    $(".show-pass").hover(function(){
        show_field.attr('type','text');
    },function(){
        show_field.attr('type','password');
    });
    $(".confirm").click(function(){
        return confirm("Are You Sure?");
    });

    $('.toggle-info').click(function(){
        console.log("Yes");
        $(this).toggleClass("selected").parent().next(".panel-body").fadeToggle(200);
        if($(this).hasClass("selected")){
            $(this).html("<i class='fas fa-plus'></i>");
        }else{
            $(this).html("<i class='fas fa-minus'></i>");
        }
    });
    function keyUp($input,$class){
        $($input).on("keyup",function(){
            $($class).text($(this).val());
        });
    }
    keyUp(".live-name",".live-ad .caption h5");
    keyUp(".live-desc",".live-ad .caption p");
    keyUp(".live-price",".live-ad .price_tag");
    keyUp(".live-country",".live-ad .caption .country-tag");

    
    $(".live-name").on("keyup",function(){
        $(".live-ad .caption h5").text($(this).val());
    });
    $(".heart").click(function(){
        $(this).toggleClass("like");
        if($(this).hasClass("like")){
            $(this).html("<i class='fas fa-heart heart2'></i>");
        }else{
            $(this).html("<i class='far fa-heart heart2'></i>");
        }
    })
    $(".heart3").click(function(){
        $(this).toggleClass("like");
        if($(this).hasClass("like")){
            $(this).html("<i class='fas fa-heart heart2'></i>");
        }else{
            $(this).html("<i class='far fa-heart heart2'></i>");
        }
    })
    $(".errorMsg").click(function(e){
        e.preventDefault();
        $(".Msg").fadeIn();
    });
    $(".Msg").click(function(){
        $(this).fadeOut();
    });
    $(".imgWish").mouseover(function(){
        $(".Msg2").fadeIn();
    });
    $(".imgWish").mouseleave(function(){
        $(".Msg2").fadeOut();
    });
    
});
/*Ezz1*/

    <!-- Created By CodingNepal -->
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
    event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  slidePage.style.opacity =1;

  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  /*setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);*/
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
var password = document.getElementById("password1")
  , confirm_password = document.getElementById("password2");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var MainMenu = (function() {
    var MainMenu = function(config) {
        config = config || {};
        this.toggleBtn = $(config.toggleBtn);
        this.menu = $(config.menu);
        this.close = $(config.close);

        this.init();
        config = null;
    };
    // public interface
    MainMenu.prototype = {
        constructor: MainMenu,
        init: function() {
            this.eventManager();
        },
        eventManager: function() {
            this.toggleBtn.on('click.openMenu', onButtonClickHandler.bind(this));
            this.close.on('click.closeMenu', onCloseClickHandler.bind(this));
        }
    };
    // private interface
    function onButtonClickHandler(menu, evt) {
        if (!this.menu.hasClass('open')) {
            this.menu.addClass('open');
        };

    }

    function onCloseClickHandler(evt) {
        this.menu.removeClass('open')
    }

    function onDocumentClickHandler(evt) {
        var $target = $(evt.target);

        if (!$target.closest(this.menuForm).length && !$target.closest(this.menuContent).length && this.menu.hasClass('open')) {
            this.menu.removeClass('open')
        }
    }

    return MainMenu;
})();


$(document).ready(function() {
    var mainMenu = new MainMenu({
        menu: '.main-menu',
        toggleBtn: '.main-menu-btn',
        close: '.main-menu-close'
    });
});
/*Ezz2*/
 function Appear(){


                var text=document.getElementById('WelcomeDoctor').style.opacity=1;
        }
        function Disappear(){

                var text=document.getElementById('WelcomeDoctor').style.opacity=0;

        }
        function Appear2(){


                var text=document.getElementById('WelcomeDear').style.opacity=1;
        }
        function Disappear2(){

                var text=document.getElementById('WelcomeDear').style.opacity=0;

        }


