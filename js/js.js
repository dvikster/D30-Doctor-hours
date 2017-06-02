$(document).ready(function() {


    $.getJSON('doctor-hours.json', function (data) {
        var doctorsHours = data;
        var optionDoctors= '<option value="" disabled selected>Оберіть лікаря</option>';
        for(doctors in doctorsHours){
            optionDoctors+= "<option value='" + doctors + "'>" + doctors + "</option>";
        }
        $('#doctor').html(optionDoctors);
        $('select').material_select();
    });

    var doctor='';
    $('#doctor').change(function() {
        doctor = $('#doctor').val();

        console.log(doctor);
    });




    $('#zapis').on('click',function () {
        var out='';
        $('#out').empty();

        var doctor=$('#doctor').val();
        var start=$('#start').val();
        var finish=$('#finish').val();



        $('#out').append(out);
    });

});

// localStorage.setItem(doctors, doctorsHours[doctors]);