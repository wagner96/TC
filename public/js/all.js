$( document ).ready(function(){

    $(document).ready(function ($) {
        $("#phone").mask("(99)9 9999-9999");
        $("#cep").mask("99999-999");

    });
    $(document).ready(function () {
        var date_input = $('input[name="birth_date"]'); //our date input has the name "date"
        var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
        var options = {
            format: 'dd/mm/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        };
        date_input.datepicker(options);
    });


    function ocultarMostrar(chk) {
        var mostrar = 'none';
        var mostrar2 = 'none'
        if (chk.checked)
            mostrar = '';
        document.getElementById('txt').style.display = mostrar;
        document.getElementById('txt2').style.display = mostrar;
        document.getElementById('txt3').style.display = mostrar;
        document.getElementById('txt4').style.display = mostrar;
        document.getElementById('txtSexo').style.display = mostrar2;

    }
    function ocultarMostrar2(chk) {
        var mostrar = '';
        var mostrar2 = ''
        if (chk.checked)
            mostrar = 'none';
        document.getElementById('txt').style.display = mostrar;
        document.getElementById('txt2').style.display = mostrar;
        document.getElementById('txt3').style.display = mostrar;
        document.getElementById('txt4').style.display = mostrar;
        document.getElementById('txtSexo').style.display = mostrar2;



    }
})