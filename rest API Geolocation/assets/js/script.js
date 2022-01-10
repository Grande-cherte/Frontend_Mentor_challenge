var lant, long, map;
var api_key = "at_JcqaoYoQ7bNGKX1k0BBMEq0INmILt";
var inputvalue = document.querySelector('#input_search').value;

function UpdateInfos(e) {
    $('#ip').text(e.ip);
    $('#location').text(e.location.region + "-" + e.location.country);
    $('#time').text(e.location.timezone);
    $('#isp').text(e.isp.substring(0, 20));
    document.getElementById("#input_search").value = e.ip;
    console.log(e.domains);

}


function maps(lant, long) {
    map = L.map('map', {
        center: [lant, long],
        zoom: 20
    });
    L.tileLayer("https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=66pxs0fTY0Xfmco5IS4Q", {
    }).addTo(map);
    var myIcon = L.icon({
        iconUrl: 'assets/media/icons/icon-location.svg',
        iconSize: [38, 48],
    });
    L.marker([lant, long], { icon: myIcon }).addTo(map);
}



$(function () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: api_key },
        success: function (e) {
            UpdateInfos(e)
            lant = e.location.lat;
            long = e.location.lng;
            maps(lant, long);
        }
    });
});



$("#btn_search").click(function () {

    var ip = '';
    var domain = '';
    map.remove();

    var inputvalue = document.querySelector('#input_search').value;

    if (/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(inputvalue)) {
        ip = inputvalue;
    }
    else if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(inputvalue)) {
        domain = inputvalue;
    } else {
        alert('wrong value');
        location.reload();
    }
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: api_key, ipAddress: ip, domain: domain },
        success: function (e) {
            UpdateInfos(e);
            lant = e.location.lat;
            long = e.location.lng;
            console.log(e.domain);
            maps(lant, long);
        }
    });

});




//if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.text(ip)) {
 //   console.log('its an IP address');
//} else {
  //  console.log('its wrong IP address');
//}