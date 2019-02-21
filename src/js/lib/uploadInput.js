/*
* Created by shate@ya.ru on 21.02.2019
*/
document.addEventListener('DOMContentLoaded', function () {
    $(".main_input_file").change(function() {

        const f_name = [];

        for (let i = 0; i < $(this).get(0).files.length; ++i) {

            f_name.push(" " + $(this).get(0).files[i].name);

        }

        $("#f_name").val(f_name.join(", "));
    });
});

