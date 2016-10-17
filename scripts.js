$(function () {
    'use strict';

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/search",
            data: {
                part: 'snippet',
                key: 'AIzaSyA0lb_D0ogHiJCwqsMStWjwQSM0ex8OxbY',
                q: $('#js-searchbox').val()
            }
        }).done(function (data) {
            $('#js-searchbox').val('');
            console.log(data);
        }).fail(function (data) {
            console.log('failed');
        });
    });
});
