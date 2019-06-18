/*!
 * Mango JS
 * Jones Joseph
 * For Uplasta - via DQube GSS 
 */

$(document).ready(function () {
    dataActionUrl();
    windowActionUrl();
})

var dataActionUrl = function () {
    $('body').on('click', '[data-action-url]', function () {
        location.href = $(this).data('action-url');
    })
}

var windowActionUrl = function () {
    $('body').on('click', '[data-window-url]', function () {
        window.open($(this).data('window-url'), 'assessment', 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=1000,height=500');
    })
}