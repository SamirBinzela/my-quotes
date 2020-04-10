$(document).ready(function() {
function getnewquote() {
    $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
            method: 'getquote',
            lang:'en',
            format:'jsonp'
        },
        success: function(response) {
            console.log(response.quotetext);
        }
    });
}
getnewqquote();
});