/*
* Created by shate@ya.ru on 14.03.2019
*/
$(document).on('af_complete', function(event, response) {

    const stars = document.querySelector('#form-response .stars-radio');
    const modalForm = document.getElementById('feedbackModal');

    if(stars){
        for (let i = 0; i < stars.children.length; i++) {
            stars.children[i].classList.remove('fa-star');
            stars.children[i].classList.add('fa-star-o');
        }
    }

    if(modalForm){
        $('#feedbackModal').modal('hide')
    }

});