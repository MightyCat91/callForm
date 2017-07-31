(function ($) {
    $(document).ready(function() {
        // Маски телефонов
        $('input[name="phone"]')
            .focus(function() {
                $(this).attr('placeholder', '+7 (___) ___-__-__');
            })
            .blur(function() { $(this).attr('placeholder', 'Телефон'); })
            .mask('+7 (000) 000-00-00', {});

        $('.call__btn').fancybox();
    });
})(jQuery);