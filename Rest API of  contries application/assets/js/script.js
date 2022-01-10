var html;

function printHtml(data) {
    html = '<div  class="col-md-6 col-xl-3 country">';
    html += '<div class="card-country" >';
    html += '<a href="info.html?name=' + data.name.common + '" class="getdata">';
    html += '<div class="image-country">';
    html += '<img src=' + data.flags.png + ' id="image-country"  class="w-100 h-100" alt="image country"/>';
    html += '</div>';
    html += '<div class="info-country">';
    html += '<h1 class="name-country" id="name-country">' + data.name.official + '</h1>';
    html += '<span class="span-info">Population: </span><small id="population">' + data.population + '</small><br>';
    if (data.region === undefined) {
        $("#region").hide();
    } else {
        html += '<span class="span-info"> Region: </span><small id="region">' + data.region + '</small><br>';
    }
    if (data.capital === undefined) {
        $("#capital").hide();
    } else {
        html += '<span class="span-info">Capital: </span><small id="capital">' + data.capital + '</small><br>';
    }

    html += '</div>';
    html += '</a>';
    html += '</div>';
    html += '</div>';
    $("#countrys").append(html);
}

$("#slct").change(function () {
    var region = $('#slct option:selected').text();
    $(".country").remove();
    if (region === 'All') {
        url_ = 'https://restcountries.com/v3.1/all';
    } else {
        url_ = 'https://restcountries.com/v3.1/region/' + region;
    }

    $.ajax({
        url: url_,
        success: function (data) {
            $.each(data, function (i, data) {
                printHtml(data);
            });
        }
    });
});

$(function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    var u;

    if (window.location.href.indexOf("region") == -1) {
        u = 'https://restcountries.com/v3.1/all';
    } else {
        u = 'https://restcountries.com/v3.1/region/' + params.region;
    }
    $.ajax({
        url: u,
        success: function (data) {
            $.each(data, function (i, data) {
                printHtml(data);
            });
        }
    });
});



$('#mode').click(function () {
    $('.body').toggleClass('bgwhite');
    $('.a-where').toggleClass('txt-light');
    $('.card-country').toggleClass('light');
    $('nav').toggleClass('light');
    $('.serch').toggleClass('light');
    $('.bi-search').toggleClass('search-icon-light');
    $('.form-select').toggleClass('light');
    $('span').toggleClass('txt-light');
    $('small').toggleClass('txt-light');
    $('.name-country').toggleClass('txt-light');
    $('.border-btn').toggleClass('light');
    $('.back-btn').toggleClass('light');
    $('.btn-voir-plus').toggleClass('light');
    $('i').toggleClass('colorDark');
    if ($("body").hasClass("bgwhite")) {
        $(this).find("i").removeClass("bi-moon").addClass('bi-moon-fill');
        $('#mode .bi').text(" Dark mode");

    } else {
        $(this).find("i").removeClass("bi-moon-fill").addClass('bi-moon');
        $('#mode .bi').text(" Light mode");
    }
});


$(document).ready(function () {
    $('#search-value').keyup(function () {
        $("#countrys").html('');
        var searchField = $('#search-value').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('https://restcountries.com/v3.1/all', function (data) {
            $.each(data, function (i, data) {
                if ((data.name.official.search(expression) != -1) && (data.region == $('#slct option:selected').text())) {
                    printHtml(data);
                }
            });
        });
    })
});

var r;

if ($(".body-infos")[0]) {
    $(function () {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        $.ajax({
            url: 'https://restcountries.com/v2/name/' + params.name,

            success: function (data) {
                $('.name-country').text(data[0].name);
                console.log(data[0].name)
                $('.img-info').attr("src", data[0].flags.svg);
                $('.NativeName').text(data[0].nativeName);
                $('.Population').text(data[0].population);
                $('.SubRegion').text(data[0].subregion);
                $('.tld').text(data[0].topLevelDomain[0]);
                $('.Languages').text(data[0].languages[0].name);

                if (data[0].currencies === undefined) {
                    console.log("null");
                    $('.Currencies').hide();
                    $('.span-Currencies').hide();
                } else {
                    $('.Currencies').text(data[0].currencies[0].name);
                }
                if (data[0].borders === undefined) {
                    console.log("null border");
                    $('.border1').hide();
                    $('.border2').hide();
                    $('.border3').hide();
                    $('.span-border').hide();
                } else {
                    $('.border1').text(data[0].borders[0]);
                    $('.border2').text(data[0].borders[1]);
                    $('.border3').text(data[0].borders[2]);
                }
                if (data[0].region === undefined) {
                    $('.Region').hide();
                    $('.span-Region').hide();
                } else {
                    $('.Region').text(data[0].region);
                }

                if (data[0].capital === undefined) {
                    $('.Capital').hide();
                    $('.span-capital').hide();
                } else {
                    $('.Capital').text(data[0].capital);
                }
                r = $('.Region').text();
                $('.back-btn').attr("href", "index.html?region=" + r);
            }
        });
    });
}

