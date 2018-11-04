$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('debug')) {
        $('*').css('border','1px solid red');
    }
})