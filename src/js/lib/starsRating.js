/**
 * Created by Igor Smirennikov (shate@ya.ru)) on 20.09.2018.
 */

document.addEventListener('DOMContentLoaded', function()
{

  const stars = document.querySelector('#form-response .stars-radio');

  if(stars){
    for (let i = 0; i < stars.children.length; i++) {
      stars.children[i].addEventListener('click', bindEventClickStar);
    }
  }

  function bindEventClickStar() {

      const value = this.getAttribute('data-target') ;
      console.log(value)
      for(let i = 0; i < value; i++){
        if (stars.children[i].classList.contains('fa-star-o')) {
          stars.children[i].classList.remove('fa-star-o');
          stars.children[i].classList.add('fa-star');
        }
      }
      for(let i = value; i < stars.children.length; i++){
        if (stars.children[i].classList.contains('fa-star')) {
          stars.children[i].classList.add('fa-star-o');
          stars.children[i].classList.remove('fa-star');
        }
      }
    }

}
);

