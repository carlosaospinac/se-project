$(function() {

    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });


    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').removeClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top				
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
        }
    });
    
    // Add smooth scrolling to all links in navbar
    $(".navbar a, a.mouse-hover, .overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });
    $.validator.addMethod("regx", function(value, element, regexpr) {          
      return regexpr.test(value);
    }, "Please enter a valid name.");

    $.validator.setDefaults({
      debug: false,
      success: "valid"
    });
    $( "#sign-up-form" ).validate({
      rules: {
        "university": {
          required: true
        },
        "name": {
          required: true,
          maxlength: 40,
          regx: /[a-zA-Z ]/,
        },
        "lastname": {
          required: true,
          maxlength: 40,
          regx: /[a-zA-Z ]/,
        },
        "email": {
          required: true,
          email: true
        },
        "password": {
          required: true,
          minlength: 6,
          maxlength: 15,
        },
        "confirm-password": {
          required: true,
          equalTo: "#password"
        }
      }
    });

    $('#min_date, #max_date').val(new Date().toDateInputValue());

});