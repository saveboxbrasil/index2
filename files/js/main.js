$(document).ready(function(){
    $('#cliqueVeja').click(function(){
        $('#cliqueVeja').hide();
        $('#youtubeVideo').show();
        $("#youtubeVideo")[0].src += "?autoplay=1";
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
	
	jQuery("#calculadora-form").on("submit", function(t) {
        t.preventDefault(), console.log("Calculando..."), jQuery(this).hide();
        var e = "#calculadora-resultado",
            o = .5 * jQuery("#valor-conta").val().replace(/,/g, "."),
            a = Math.ceil(190 / o);
        if (1 < a) var n = "meses";
        else n = "mês";
        jQuery(e + " .meses").html(a + " " + n), jQuery("#economia_mensal").html(o), jQuery(e).show()
    });
	
	jQuery("#refazer").on("click", function(t) {
        jQuery("#calculadora-resultado").hide(), jQuery("#calculadora-form").show()
    });
});