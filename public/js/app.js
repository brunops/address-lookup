(function ($) {

  $(function () {
    $('#fill-address').on('click', function () {

      if (!('geolocation' in window.navigator)) {
        return;
      }

      $('input').attr({ disabled: 'disabled' });


      navigator.geolocation.getCurrentPosition(function (position) {

        $.ajax({
          url: '/address-lookup',
          method: 'GET',
          data: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          dataType: 'json'
        }).done(function (response) {
          console.log(response);

          $('#city').val(response.city);
          $('#zipcode').val(response.postal_code);
          $('#address').val([response.street, response.street_number].join(' '));
          $('#neighborhood').val(response.neighborhood);
          $('#country').val(response.country);
          $('#state').val(response.state);

          $('input').removeAttr('disabled');

        });
      });




    });
  });

})(jQuery);

