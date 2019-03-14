/*
* Created by shate@ya.ru on 05.03.2019
*/
document.addEventListener('DOMContentLoaded', function () {

    const addition = document.querySelectorAll('.jsAddition');

    function addValue (e){
        const sum = this.querySelector('.jsSum');
        const row = this.parentElement.parentElement;
        const count = this.querySelector('input[name=count]');

         let val = +sum.innerHTML;

        if(e.target.dataset.sum && val >= 1){
            switch (e.target.dataset.sum) {
                case 'plus' : val++;
                    break;
                case 'minus' : if(val > 1) val-- ;
                    break;
            }
            sum.innerHTML = val;
            count.value = val;
            if(row.classList.contains('calc')){
                const price = +row.querySelector('.jsPrice').innerHTML.replace(/\s/g, '');
                const cost = row.querySelector('.jsCost');
                const total = price * val;
                cost.innerHTML = (total.toString()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

            }
        }
    }

    if(addition.length){
        for(let i = 0; i < addition.length; i++){
            addition[i].addEventListener('click', addValue);
        }
    }

});