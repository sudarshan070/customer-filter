$('.toggle_btn').click(function () {
    $(this).siblings('.qoute').toggleClass('active');
});

$('.filter-btn').click(function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    pause_all_video();
});

$('.parent-business-type').click(function () {
    if ($(this).siblings('.div-block-11').hasClass('active') == true) {
        $('.div-block-11').removeClass('active');
    } else {
        $('.div-block-11').removeClass('active');
        $(this).siblings('.div-block-11').addClass('active')
    }
});

$(".collection-item-2").each(function (index) {
    var current_video_id = "" + $(this).children('.brand-card').children('.meta-data').children('.meta-video').html();
    //alert(current_video_id);

    _wq.push({
        id: current_video_id, onReady: function (video) {
            video.bind("play", function () {
                $(".collection-item-2").each(function (i) {
                    var video_id = "" + $(this).children('.brand-card').children('.meta-data').children('.meta-video').html();

                    if (video_id != current_video_id) {
                        _wq.push({
                            id: video_id, onReady: function (video) {
                                video.pause();
                            }
                        });
                    }
                });
            });
        }
    });
});


$('.sub_item').click(function () {
    var sub_item = $(this).children('.text-block-6').html();

    if ($(this).hasClass("active") == false) {
        $(this).addClass("active");
        sub_item_array.push(sub_item);
    } else {
        $(this).removeClass("active");
        removeArray(sub_item_array, sub_item);
    }
    filter_items();
});

$('.reset-filter').click(function () {
    $('.size-bar-btn').removeClass("active");
    $('.sub_item').removeClass("active");
    $('.map div').removeClass("active");
    $('.filter-btn').removeClass("active");
    $('.div-block-11').removeClass('active');
    sub_item_array = [];
    region_array = [];
    size_array = [];
    $(".collection-item-2").show();
    pause_all_video();
});

function pause_all_video() {
    $(".collection-item-2").each(function (i) {
        var video_id = "" + $(this).children('.brand-card').children('.meta-data').children('.meta-video').html();
        _wq.push({
            id: video_id, onReady: function (video) {
                video.pause();
            }
        });
    });
}

if ($(window).width() < 600) {
    $('.collection-item:nth-child(1) .text-block-5').addClass('active');
    $('.collection-item:nth-child(1) .div-block-11').addClass('active');
    $('.collection-item').click(function () {
        $('.text-block-5').removeClass('active');
        $(this).children('.text-block-5').addClass('active');
        $('.div-block-11').removeClass('active');
        $(this).children('.div-block-11').addClass('active');
    });
}


$('.brand-video').height(($('.brand-video').width() / 16) * 9);


// $('.filter_swiper').click(function () {
//     $(".filter-btn-name").html('Filters');
// });

$('.reset-filter').click(function () {
    $(".filter-btn-name").html('Filters');
});

// $('.sub_item, .map .div, .size-bar-btn').click(function () {
//     $(".filter-btn-name").html('Apply');
// });