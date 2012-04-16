/*
 * Piwiktracking admin functions
 */
jQuery(function($) {
    $('.ui-tabs').tabs({
        fx : {
            opacity : 'toggle',
            duration : 80
        },
        show : onSelect
    });
    function onSelect(event, ui) {
        $('.ui-tabs-nav li a').removeClass('nav-tab-active');
        $('.ui-tabs-selected a').addClass('nav-tab-active');
    }


    $('#select-all').change(function() {
        $('#user-roles input[type="checkbox"]').prop('checked', this.checked);
    });
});
