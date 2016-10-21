$(function () {
    'use strict';

    $('form').submit(function (e) {
        e.preventDefault();
        var sanitizedInput = $('#js-searchbox').val().trim().replace(/[^a-zA-Z0-9\s]/gi, '');

        $.ajax({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/search",
            data: {
                part: 'snippet',
                key: 'AIzaSyA0lb_D0ogHiJCwqsMStWjwQSM0ex8OxbY',
                q: sanitizedInput
            }
        }).done(function (data) {
            $('#js-searchbox').val('');
            $('.js-results').empty();

            for (var i = 0; i < data.items.length; i++) {
                $('.js-results').append(
                    '<li>' +
                    '<a href="https://www.youtube.com/watch?v=' + data.items[i].id.videoId + '"><img src="' + data.items[i].snippet.thumbnails.default.url + '" />'+
                    '<span class="title">' + data.items[i].snippet.description.substring(0, 75) + '...' + '</span>'+
                    '</a></li>'
                );
            }
        }).fail(function (data) {
            console.log('failed');
        });
    });
});
