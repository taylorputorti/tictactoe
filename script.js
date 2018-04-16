$(document).ready(function(){
  var cell = $('td');
  var banner = $('#banner');
  var one = $('#one');
  var two = $('#two');
  var three = $('#three');
  var four = $('#four');
  var five = $('#five');
  var six = $('#six');
  var seven = $('#seven');
  var eight = $('#eight');
  var nine = $('#nine');

  cell.click(function(){
    if($(this).hasClass('o') || $(this).hasClass('x')){
       banner.append('<p>That square is taken!</p>');
       }
    $(this).addClass("x");


 //opener
if(!(five.hasClass('x')) && !(five.hasClass('o'))){
	five.addClass('o');}
else if(!(one.hasClass('x')) && !(one.hasClass('o'))){
	one.addClass('o');}

//corners
if(one.hasClass('x') && three.hasClass('x') && !(two.hasClass('o'))){
	two.addClass('o');
	}
else if(one.hasClass('x') && seven.hasClass('x') ** !(four.hasClass('o'))){
	four.addClass('o');}
else if(three.hasClass('x') && nine.hasClass('x') && !(six.hasClass('o'))){
	six.addClass('o');}
else if(seven.hasClass('x') && nine.hasClass('x') && !(eight.hasClass('o'))){
	eight.addClass('o');}

    if(one.hasClass('x') && four.hasClass('x') && !(seven.hasClass('o'))){
		seven.addClass('o');
	}

    	//mids
	if(one.hasClass('x') && four.hasClass('x') && !(seven.hasClass('o'))){
		seven.addClass('o');
	}
	else if(one.hasClass('x') && two.hasClass('x') && !(three.hasClass('o'))){
		three.addClass('o');
	}
	else if(three.hasClass('x') && two.hasClass('x') && !(one.hasClass('o'))){
		one.addClass('o');
	}
	else if(seven.hasClass('x') && four.hasClass('x') && !(one.hasClass('o'))){
		one.addClass('o');
	}
  })})
