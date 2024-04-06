$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const checkedAmenitiesNames = [];
    const checkedAmenitiesIds = [];
    $('input[type=checkbox]:checked').each(function () {
      checkedAmenitiesNames.push($(this).attr('data-name'));
      checkedAmenitiesIds.push($(this).attr('data-id'));
    });
    if (checkedAmenitiesNames.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(checkedAmenitiesNames.join(', '));
    }
    console.log(checkedAmenitiesIds);
  });
});
