// JS for Dataport site
$('.dropdownContainer').hide();

// sticky scroll
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log('The distance scrolled is: ' + distanceScrolled);
  if (distanceScrolled > 80) {
    $('header').addClass('scrollBorder');
  } else {
    $('header').removeClass('scrollBorder');
  }
});

// sidbar
$('#menuButton').on('click', function() {
  $('main').addClass('bodyShift');
  $('.headerContent').fadeOut('350ms');
  $('.row2').addClass('headerShift');
  $('.menuOpenOpacity').show();
  $('nav').addClass('open');
});

$('.menuOpenOpacity').on('click', function() {
  if($('nav').hasClass('open')) {
    $('nav').removeClass('open');
    $('main').removeClass('bodyShift');
    $('.row2').removeClass('headerShift');
    $('.headerContent').fadeIn('350ms');
    $('.menuOpenOpacity').fadeOut('350ms');
  }
});

// dropdown container
$('.selectBox').on('click', function() {
  $('.dropdownContainer').slideToggle(300);
  $('.arrowTouchZone').toggleClass('turnArrow');
  $('.dropdown').toggleClass('dropdownOpen');
});
$('main').on('click', function() {
  $('.dropdownContainer').slideUp(300);
  $('.arrowTouchZone').removeClass('turnArrow');
  $('dropdown').removeClass('dropdownOpen');
});
$('.buffer').on('click', function() {
  $('.dropdownContainer').slideUp(300);
  $('.arrowTouchZone').removeClass('turnArrow');
  $('dropdown').removeClass('dropdownOpen');
});
$('.row2').on('click', function() {
  $('.dropdownContainer').slideUp(300);
  $('.arrowTouchZone').removeClass('turnArrow');
  $('dropdown').removeClass('dropdownOpen');
});

// refresh button
var refreshAngle =0;
$('#refreshButton').on('click', function() {
  refreshAngle += 360;
  $('.refreshTouchZone').css({'transform': 'rotate(' + refreshAngle + 'deg)'});
});

// checkbox
$('.img-swap').on('click', function(){
    if ($(this).attr("class") == "img-swap") {
      this.src = this.src.replace("_off","_on");
    } else {
      this.src = this.src.replace("_on","_off");
    }
    $(this).toggleClass("on");
    $('#liveContainer').slideToggle(350);
    $('#lastUpdated').toggle();
    $('div.pageBar').toggleClass('scrollBorder');
});

// subreport tabs to show
$('div .orangeHeaderTab').on('click', function () {
  $('div .orangeHeaderTab').removeClass('opacityTabActive');
  $(this).addClass('opacityTabActive');
  // $('.subreportDisplay').hide();
  // var sectionToShow = $(this).attr('data-related-panel');
  // $('#' + sectionToShow).show();
});


// subreport tab selection
$('#sub-pricing1 .subreportTabBox').on('click', function() {
  $('#sub-pricing1 .subreportTabBox').removeClass('tabBoxActive');
  $(this).addClass('tabBoxActive');
});

// sandbochs report
$('#liveReport2-1-1 a').on('click', function () {
		$('#liveReport2-1-1 a').removeClass('orangeTabActive');
		$(this).addClass('orangeTabActive');
		$('.nav-panel').hide();
		var sectionToShow = $(this).attr('data-related-panel');
		$('#' + sectionToShow).show();
});
