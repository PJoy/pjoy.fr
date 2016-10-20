//if you're reading this, run while you can

$(document).ready(function(){
    applyHeader();
    colorTheSkills();
    var index = 0;
    $('.slideshow').hide();
    $('.slideshow:first').toggle();
    window.setInterval(function(){
        $('.slideshow:nth-of-type('+(index%5+1)+')').toggle();
        $('.slideshow:nth-of-type('+((index+1)%5+1)+')').toggle();
        index = (index+1)%5;
    }, 3000);
});



function applyHeader() {
    $('header').css({ height: ($(window).height()) +'px' });
}

function colorTheSkills() {
    colorSkills('#svg1', 8, '#E84A5F', '#2A363B');
    colorSkills('#svg2', 8, '#E84A5F', '#2A363B');
    colorSkills('#svg3', 3, '#E84A5F', '#2A363B');
}

function colorSkills(elemt, grade, col1, col2) {
    var gElems = [$(elemt +' path:nth-of-type(3)'), $(elemt +' path:nth-of-type(7)'), $(elemt +' path:nth-of-type(5)'), $(elemt +' path:nth-of-type(8)'), $(elemt +' path:nth-of-type(6)'), $(elemt +' path:nth-of-type(4)'), $(elemt +' path:nth-of-type(2)'), $(elemt +' path:nth-of-type(1)')];

    for (var i = 0; i < 8; i++){
        if ((i) < grade ) gElems[i].attr("fill", col1);
        else gElems[i].attr("fill", col2)
    }
}

function showOnlyWeb(){
    if (jQuery('.portfolio-btn:not(.clicked)').get(0) === jQuery('#cat-w-btn').get(0) &&
        jQuery('.portfolio-btn:not(.clicked)').get(1) === undefined){
        jQuery('.portfolio-btn').removeClass('clicked');
        $('.img-cont:not(:first)').fadeIn();
    } else {
        jQuery('.portfolio-btn:not(#cat-w-btn)').addClass('clicked');
        jQuery('#cat-w-btn').removeClass('clicked');
        $('.img-cont:not(:first):not(.cat-w)').fadeOut();
        $('.img-cont:not(:first).cat-w').fadeIn();
    }
}
function showOnlyRes(){
    if (jQuery('.portfolio-btn:not(.clicked)').get(0) === jQuery('#cat-i-btn').get(0) &&
        jQuery('.portfolio-btn:not(.clicked)').get(1) === undefined){
        jQuery('.portfolio-btn').removeClass('clicked');
        $('.img-cont:not(:first)').fadeIn();
    } else {
        jQuery('.portfolio-btn:not(#cat-i-btn)').addClass('clicked');
        jQuery('#cat-i-btn').removeClass('clicked');
        $('.img-cont:not(:first):not(.cat-i)').fadeOut();
        $('.img-cont:not(:first).cat-i').fadeIn();
    }
}
function showOnlyCre(){
    if (jQuery('.portfolio-btn:not(.clicked)').get(0) === jQuery('#cat-s-btn').get(0) &&
        jQuery('.portfolio-btn:not(.clicked)').get(1) === jQuery('#cat-c-btn').get(0) &&
        jQuery('.portfolio-btn:not(.clicked)').get(2) === undefined){
        jQuery('.portfolio-btn').removeClass('clicked');
        $('.img-cont:not(:first)').fadeIn();
    } else {
        jQuery('.portfolio-btn:not(#cat-s-btn):not(#cat-c-btn)').addClass('clicked');
        jQuery('#cat-s-btn').removeClass('clicked');
        jQuery('#cat-c-btn').removeClass('clicked');
        $('.img-cont:not(:first):not(.cat-s):not(.cat-c)').fadeOut();
        $('.img-cont:not(:first).cat-s').fadeIn();
        $('.img-cont:not(:first).cat-c').fadeIn();
    }
}

function showHideProjects (button, type) {
    $(button).toggleClass('clicked');
    $('.'+type).fadeToggle();
}

function showHideExperiences (button, type) {
    $(button).toggleClass('clicked');
    if ($('.experience.'+type+' .line').css("display") == 'none'){
        $('.experience.'+type+' .line').toggle(0);
        $('.experience.'+type+' .metro').toggle(0);
        $('.experience.'+type).slideToggle();
    } else {
        $('.experience.'+type).slideToggle();
        $('.experience.'+type+' .line').delay(400).toggle(0);
        $('.experience.'+type+' .metro').delay(400).toggle(0);
    }
}

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


jQuery('h2').attr("data-sr","move 0px, scale down 20%");
jQuery('#skills .row .row').attr("data-sr","");

jQuery('#skills .row h3').attr("data-sr","");


jQuery('.navbar').hide();

jQuery('form .btn').attr("data-sr","");

jQuery('i').attr("data-sr","move 0px, scale up 50%");

jQuery('.skill-wheel .col-md-3').attr("data-sr","move 0px, scale 0%");


function triggerSkillsAnim(e){
    var time = 20;
    if (jQuery(e).hasClass('skill-wheel')){
        jQuery(e).find('svg').find('path:nth-of-type(3)').delay(5*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(7)').delay(10*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(5)').delay(15*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(8)').delay(20*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(6)').delay(25*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(4)').delay(30*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(2)').delay(35*time).fadeToggle();
        jQuery(e).find('svg').find('path:nth-of-type(1)').delay(40*time).fadeToggle();
    } else if (jQuery(e).hasClass('skillAnim')) {
        jQuery(e).find('li').find('.glyphicon:nth-of-type(5)').delay(8*time).fadeToggle();
        jQuery(e).find('li').find('.glyphicon:nth-of-type(4)').delay(16*time).fadeToggle();
        jQuery(e).find('li').find('.glyphicon:nth-of-type(3)').delay(24*time).fadeToggle();
        jQuery(e).find('li').find('.glyphicon:nth-of-type(2)').delay(32*time).fadeToggle();
        jQuery(e).find('li').find('.glyphicon:nth-of-type(1)').delay(40*time).fadeToggle();
    } else if (jQuery(e).hasClass('img-circle')) {
        jQuery('.navbar').toggle("slide");
    }
}
window.sr = new scrollReveal({complete : function(e) {triggerSkillsAnim(e) }});
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('body').scrollspy({
    target: '.navbar-default',
    offset: 100
});

$('body').scrollspy({
    target: '.sticky-navbar'
});

$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#rz').click(function(){
    $('.clickable').removeClass('solo');
    $('.clickable').removeClass('muted');

    toggleProjects()
});

$('.clickable').click(function(){
    if ($(this).hasClass('solo')) {
        $('.clickable').removeClass('muted', 500);
        $(this).removeClass('solo', 500);
        $(this).addClass('muted');
    } else if ($(this).hasClass('muted')) {
        if ($('.clickable').hasClass('solo')) {
            $('.clickable.solo').removeClass('solo', 500);
        }
        $(this).removeClass('muted', 500);
    } else {
        if (!$('.clickable').hasClass('muted')){
            $('.clickable').addClass('muted');
            $(this).removeClass('muted', 500);
            $(this).addClass('solo');
        } else {
            $(this).addClass('muted');
            if ($('.clickable:not(.muted)').length == 1) $('.clickable:not(.muted)').addClass('solo');
        }
    }

    toggleProjects();
});

function toggleProjects(){
    $('.project-single').hide();
    $('.clickable:not(.muted)').each(function(){
        var tag = this;
        $('.project-single').each(function(){
            var a = $(this).attr("class").toString().split(' ');
            var b = $(tag).attr("class").toString().split(' ');
            if ($(b).not($(b).not(a)).length) $(this).show();

        })
    })
}

$("#mason-container").mason({
    itemSelector: ".box",
    ratio: 1,
    sizes: [
        [1,1]
    ],
    promoted: [
        ['mason-large', 2, 2],
        ['mason-tall', 1, 2],
        ['mason-wide', 1, 2]
    ]
});
