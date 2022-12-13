

$( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
  var dateFormat = "mm/dd/yy",
  from = $( "#from" )
  .datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3
  })
  .on( "change", function() {
    to.datepicker( "option", "minDate", getDate( this ) );
  }),
  to = $( "#to" ).datepicker({
  defaultDate: "+1w",
  changeMonth: true,
  numberOfMonths: 3
  })
  .on( "change", function() {
  from.datepicker( "option", "maxDate", getDate( this ) );
  });

  function getDate( element ) {
  var date;
  try {
  date = $.datepicker.parseDate( dateFormat, element.value );
  } catch( error ) {
  date = null;
  }

return date;
}
} );

  $( function() {
  $( document ).tooltip();
  } );

  $( function() {
  $( "#slider-range" ).slider({
  range: true,
  min: 50,
  max: 1000,
  values: [ 75, 300 ],
  slide: function( event, ui ) {
  $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
  }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );

$( function() {
$( "input" ).checkboxradio();
} );

$( function() {
// run the currently selected effect
function runEffect() {
// get effect type from
var selectedEffect = $( "#effectTypes" ).val();

// Most effect types need no options passed by default
var options = {};
// some effects have required parameters
if ( selectedEffect === "scale" ) {
  options = { percent: 50 };
} else if ( selectedEffect === "transfer" ) {
  options = { to: "#button", className: "ui-effects-transfer" };
} else if ( selectedEffect === "size" ) {
  options = { to: { width: 200, height: 60 } };
}

// Run the effect
$( "#effect" ).effect( selectedEffect, options, 500, callback );
};

// Callback function to bring a hidden box back
function callback() {
setTimeout(function() {
  $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
}, 1000 );
};

// Set effect from select menu value
$( "#button" ).on( "click", function() {
runEffect();
return false;
});
} );