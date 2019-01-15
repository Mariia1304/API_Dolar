$(document).ready(function() {
    // $.getJSON('https://mindicador.cl/api', function(data) {
    //     var dailyIndicators = data;
    //     $("<p/>", {
    //         html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
    //     }).appendTo("body");
    // }).fail(function() {
    //     console.log('Error al consumir la API!');
    // });
    var valorUtm = null;
    var valorUf = null;
    var valorEuro = null;
    var valorDolar = null;
    var dolar = $("#dolar");
    var euro = $("#euro");
    var uf = $("#uf");
    var utm = $("#utm");
    $.ajax({
        url: 'https://mindicador.cl/api',
        method: 'GET'
    }).then(function(data) {
        console.log(data);
        dolar.text(data.dolar.valor + ' pesos chilenos');
        euro.text(data.euro.valor + ' pesos chilenos');
        uf.text(data.uf.valor + ' pesos chilenos');
        utm.text(data.utm.valor + ' pesos chilenos');
        valorDolar = data.dolar.valor;
        valorEuro = data.euro.valor;
        valorUf = data.uf.valor;
        valorUtm = data.utm.valor;
    });
    $("#b_pesos_ch").on('click', function() {
        var pesos_ch = $("#pesos_ch").val();
        if (valorDolar == null) {
            alert("Todavia no llego información")
        } else {
            $('#a_dolar').text((pesos_ch / valorDolar).toFixed(3) + ' USD');
        };
        if (valorEuro == null) {
            alert("Todavia no llego información")
        } else {
            $('#a_euro').text((pesos_ch / valorEuro).toFixed(3) + ' EUR');
        };
        if (valorUf == null) {
            alert("Todavia no llego información")
        } else {
            $('#a_uf').text((pesos_ch / valorUf).toFixed(3) + ' UF');
        };
        if (valorUtm == null) {
            alert("Todavia no llego información")
        } else {
            $('#a_utm').text((pesos_ch / valorUtm).toFixed(3) + ' UTM');
        };
        $("#pesos_ch").val('');
    });
    $("#b_dolar").on('click', function() {
        var usd = $('#USD').val();
        if (valorDolar == null) {
            alert("Todavia no llego información")
        } else {
            $("#Pesos").text(usd * valorDolar + ' CHP');
        };
        $('#USD').val('');
    });
});